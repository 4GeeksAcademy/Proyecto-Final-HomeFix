"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Product, Province
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
from werkzeug.security import generate_password_hash
import json
from datetime import timedelta
from dotenv import load_dotenv
import os, requests


api = Blueprint('api', __name__)

CORS(api)
load_dotenv()

chat_engine_private_key = os.getenv("CHAT_ENGINE_PRIVATE_KEY")

@api.route("/signup", methods=["POST"])
def signup():
    data = request.get_json()

    email = data.get("email")
    password = data.get("password")

    if User.query.filter_by(email=email).first():
        return jsonify({"msg": "Email already exists"}), 400

    new_user = User(email=email, password=password, is_active=True)

    db.session.add(new_user)
    db.session.commit()

    access_token = create_access_token(identity=new_user.id)

    return jsonify({"token": access_token, "user_id": new_user.id}), 201



@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route("/token", methods=["POST", "GET"])
def create_token():
    email = request.json.get("email", None)
    password = request.json.get("password", None)

    # Query your database for username and password
    user = User.query.filter_by(email=email, password=password).first()

    if user is None:
        # The user was not found on the database
        return jsonify({"msg": "Bad email or password"}), 401
    
    # Create a new token with the user id inside
    access_token = create_access_token(identity=user.id, expires_delta=timedelta(days=1))
    return jsonify({ "token": access_token, "user_id": user.id })

@api.route("/protected", methods=["GET"])
@jwt_required()
def protected():
    # Access the identity of the current user with get_jwt_identity
    current_user_id = get_jwt_identity()
    user = User.query.filter_by(id = current_user_id).first()
    
    return jsonify({"id": user.id, "username": user.email }), 200
    # return jsonify({"id": "cualquier cosa" }), 200

@api.route("/products", methods=["POST"])
@jwt_required()
def create_product():
    try:
        current_user_id = get_jwt_identity()
        user = User.query.filter_by(id=current_user_id).first()

        data = request.get_json()

        name = data.get("name")
        description = data.get("description")
        price = data.get("price")
        images_urls = json.dumps(data.get("images_urls"))
        province_name = data.get("province")
        
        new_product = Product(
            name=name,
            description=description,
            price=price,
            seller=user, 
            images_urls=images_urls,
            province=province_name
        )

        db.session.add(new_product)
        db.session.commit()

        return jsonify({"message": "Product created successfully", "product_id": new_product.id}), 201

    except Exception as e:
        return jsonify({"message": str(e)}), 500

@api.route("/get_all_products", methods=["GET"])
def get_all_products():
    try:
        products = Product.query.all()

        serialized_products = [product.serialize() for product in products]

        return jsonify(serialized_products), 200

    except Exception as e:
        return jsonify({"message": str(e)}), 500
    
@api.route("/provinces", methods=["GET"])
def get_all_provinces():
    try:
        provinces = Province.query.all()
        serialized_provinces = [province.serialize() for province in provinces]
        return jsonify(serialized_provinces), 200
    except Exception as e:
        return jsonify({"message": str(e)}), 500



@api.route('/login', methods=['POST'])
def login():
    response = requests.get('https://api.chatengine.io/users/me/', 
        headers={ 
            "Project-ID": os.environ['CHAT_ENGINE_PROJECT_ID'],
            "User-Name": request.get_json()['username'],
            "User-Secret": request.get_json()['secret']
        }
    )
    return response.json()

@api.route('/signupchat', methods=['POST'])
def signupchat():
    response = requests.post('https://api.chatengine.io/users/', 
        data={
            "username": request.get_json()['username'],
            "secret": request.get_json()['secret'],
            "email": request.get_json()['email'],
            # "first_name": request.get_json()['first_name'],
            # "last_name": request.get_json()['last_name'],
        },
       headers={ "Private-Key": os.environ['CHAT_ENGINE_PRIVATE_KEY'] }
    )
    return response.json()

@api.route("/productsbyuser", methods=["GET"])
@jwt_required()
def get_user_products():
    try:
        current_user_email = get_jwt_identity()
        user = User.query.filter_by(email=current_user_email).first()

        if not user:
            return jsonify({"message": "User not found"}), 404

        products = Product.query.filter_by(user_id=user.id).all()

        serialized_products = [product.serialize() for product in products]

        return jsonify(serialized_products), 200

    except Exception as e:
        return jsonify({"message": str(e)}), 500
    
@api.route("/user/<int:user_id>", methods=["GET"])
def get_user_profile(user_id):
    user = User.query.get(user_id)
    if user is None:
        return jsonify({"message": "User not found"}), 404

    return jsonify(user.serialize()), 200
