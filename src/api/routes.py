"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Product
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
from werkzeug.security import generate_password_hash

api = Blueprint('api', __name__)

CORS(api)

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
    access_token = create_access_token(identity=user.id)
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

        new_product = Product(
            name=name,
            description=description,
            price=price,
            seller=user  # Asociamos el producto con el usuario actual
        )

        db.session.add(new_product)
        db.session.commit()

        return jsonify({"message": "Product created successfully", "product_id": new_product.id}), 201

    except Exception as e:
        return jsonify({"message": str(e)}), 500

@api.route("/products", methods=["GET"])
def get_all_products():
    try:
        products = Product.query.all()

        serialized_products = [product.serialize() for product in products]

        return jsonify(serialized_products), 200

    except Exception as e:
        return jsonify({"message": str(e)}), 500

