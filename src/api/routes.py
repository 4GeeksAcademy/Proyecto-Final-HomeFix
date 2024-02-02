"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User_be, Product, Province, Category
from api.utils import generate_sitemap, APIException
# from flask_cors import CORS
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
from werkzeug.security import generate_password_hash
import json
from datetime import timedelta
from dotenv import load_dotenv
import os, requests
from flask_cors import CORS, cross_origin


api = Blueprint('api', __name__)

CORS(api, origins=["http://localhost:3000", "http://localhost:3001","http://localhost:3001/api/todoist/auth", "http://localhost:3001/api/todoist/callback","http://127.0.0.1:3000/home?, http://localhost:3000/dashboard/profile"])


load_dotenv()

chat_engine_private_key = os.getenv("CHAT_ENGINE_PRIVATE_KEY")


# MangoPay
import mangopay

mangopay.client_id='dmo_65ab763c2ee8b'
mangopay.apikey='KoJzc1AmwJvObVmLcv3PNjt6QeiY8v0MjCVJYM9HyHVUdu0V1g'

from mangopay.api import APIRequest
handler = APIRequest(sandbox=True)

from mangopay.resources import (User, NaturalUser)
from mangopay.utils import Address
from mangopay.resources import Wallet
from mangopay.resources import Transfer
from mangopay.resources import DirectPayIn
from mangopay.resources import Money
from mangopay.resources import PayPalPayIn



# Mango  create User

handler = APIRequest(sandbox=True)

@api.route('/wallet_detail', methods=['GET'])
def details_client():
    wallet_id = request.args.get("wallet_id")
    walletint = int(wallet_id)
    wallet = Wallet.get(walletint)
    balance = wallet.balance

    return jsonify({'success': True,  'wallet_balance': str(balance)})


@api.route('/transfer', methods=['POST'])
def transfer_funds():
    data = request.json
    print(data)
    debited_funds = data.get('debited_funds')
    amount = debited_funds.get('amount') 
    currency = debited_funds.get('currency') 

    fees_funds = data.get('fees')
    amountfees = fees_funds.get('amount') 
    currencyfees = fees_funds.get('currency')


    author = 213999456,
    author_id = "213993872",

    credited_user = data.get('credited_user')
    debited_funds_amount = Money(amount, currency)
    fees = Money(amountfees, currencyfees)
    debited_wallet = data.get('debited_wallet')
    credited_wallet = data.get('credited_wallet')




    transfer = Transfer(author=author, 
                    credited_user=credited_user, 
                    debited_funds=debited_funds_amount, 
                    fees=fees, 
                    debited_wallet=debited_wallet, 
                    credited_wallet=credited_wallet)
    transfer.save()

   
    
    return jsonify({'message': 'Transfer completed successfully'}), 200

@api.route('/paypal', methods=['POST'])
def paypal():
    paypal_payin = PayPalPayIn(author="213999456",
                           debited_funds=Money(amount=100, currency='EUR'),
                           fees=Money(amount=1, currency='EUR'),
                           return_url = 'http://localhost:3000/home',
                           credited_wallet_id="213995920")

    paypal_payin.save()

    return jsonify({'message': 'Paypal completed successfully'}), 200

@api.route('/create_user', methods=['POST'])
def create_user():

    data = request.get_json()

    try:
        natural_user = NaturalUser(
            first_name=data.get("first_name"),
            last_name=data.get("last_name"),
            address=Address(
                address_line_1=data.get("address_line"),
                address_line_2='AddressLine2',
                city=data.get("city"),
                region=data.get("region"),
                postal_code=data.get("postal_code"),
                country='FR'
            ),
            birthday=1300186358,
            nationality='FR',
            country_of_residence='FR',
            occupation='Writer',
            income_range='6',
            proof_of_identity=None,
            proof_of_address=None,
            person_type='NATURAL',
            email=data.get("email"),
            user_category='PAYER',
            tag='custom tag'
        )
        natural_user.save()

        return jsonify({'success': True, 'user_id': natural_user.get_pk()})
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)})
    

# Mango  create Wallet

@api.route('/create_wallet', methods=['POST'])
def create_wallet():
    
        data = request.get_json()
    
        try:
            wallet = Wallet(Owners=[data.get("user_id")],
                Description='Wallet of '+data.get("user_id"),
                Currency='EUR',
                tag='wallet tag'
            )
            wallet.save()

            print(wallet.balance)
    
            return jsonify({'success': True, 'wallet_balance' : str(wallet.balance) ,'wallet_id': wallet.get_pk()})

        except Exception as e:
            return jsonify({'success': False, 'error': str(e)})

@api.route("/signup", methods=["POST"])
def signup():
    data = request.get_json()

    email = data.get("email")
    password = data.get("password")

    if User_be.query.filter_by(email=email).first():
        return jsonify({"msg": "Email already exists"}), 400

    new_user = User_be(email=email, password=password, is_active=True)

    db.session.add(new_user)
    db.session.commit()

    access_token = create_access_token(identity=new_user.id)

    return jsonify({"token": access_token, "email": email, "userbe_id": new_user.id}), 201

@api.route('/update_userbe', methods=['PUT'])
def update_user():

    data = request.get_json()

    userbe_id = data.get("userbe_id")

    user = User_be.query.get(userbe_id)
    if not user:
        return jsonify({'message': 'Usuario no encontrado'}), 404

    if 'mangoid' in data:
        user.mangoid = data.get('mangoid')
    if 'mangoidwallet' in data:
        user.mangoidwallet = data.get('mangoidwallet')
    if 'nombre' in data:
        user.nombre = data.get('nombre')
    if 'apellido' in data:
        user.apellido = data.get('apellido')
    if 'apellido' in data:
        user.perfildone = data.get('perfildone')


    db.session.commit()

    return jsonify({'message': 'Usuario actualizado correctamente'}), 200




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

    user = User_be.query.filter_by(email=email, password=password).first()

    print(user)

    if user is None:
        return jsonify({"msg": "Bad email or password"}), 401
    
    access_token = create_access_token(identity=user.id, expires_delta=timedelta(days=1))
    return jsonify({ "token": access_token, "userbe_id": user.id, "email": user.email, "img" : user.img, "banner" : user.banner, "name" : user.nombre }), 200


@api.route("/user/<int:userbe_id>", methods=["GET"])
def get_user_by_id(userbe_id):
    try:
        user = User_be.query.get(userbe_id)

        if not user:
            return jsonify({"message": "User not found"}), 404

        serialized_user = user.serialize()

        return jsonify(serialized_user), 200

    except Exception as e:
        return jsonify({"message": str(e)}), 500



@api.route("/protected", methods=["GET"])
@jwt_required()
def protected():
    current_user_id = get_jwt_identity()
    user = User_be.query.filter_by(id = current_user_id).first()
    
    return jsonify({"id": user.id, "username": user.email }), 200

@api.route("/products", methods=["POST"])
@jwt_required()
def create_product():
    try:
        current_user_id = get_jwt_identity()
        user = User_be.query.filter_by(id=current_user_id).first()

        data = request.get_json()

        name = data.get("name")
        description = data.get("description")
        price = data.get("price")
        images_urls = json.dumps(data.get("images_urls"))
        province_name = int(data.get("province"))
        category_ids = data.get("categories")
        categories = Category.query.filter(Category.id.in_(category_ids)).all()

        new_product = Product(
            name=name,
            description=description,
            price=price,
            seller=user, 
            images_urls=images_urls,
            province_id=province_name,
            categories=categories


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
           
        },
       headers={ "Private-Key": os.environ['CHAT_ENGINE_PRIVATE_KEY'] }
    )
    return response.json()

@api.route("/productsbyuser/<string:emailincoming>", methods=["GET"])
def get_user_products(emailincoming):
    try:
        user = User_be.query.filter_by(email=emailincoming).first()

        if not user:
            return jsonify({"message": "User not found"}), 404

        products = Product.query.filter_by(user_id=user.id).all()

        serialized_products = [product.serialize() for product in products]

        return jsonify(serialized_products), 200

    except Exception as e:
        return jsonify({"message": str(e)}), 500
    
@api.route('/categories', methods=['GET'])
def get_categories():
    categories = Category.query.all()
    serialized_categories = [category.serialize() for category in categories]
    return jsonify(serialized_categories)

@api.route('/findcategory/<int:categoria_id>', methods=['GET'])
def obtener_productos_por_categoria(categoria_id):
    categoria = Category.query.get(categoria_id)

    if not categoria:
        return jsonify({"mensaje": "Categoría no encontrada"}), 404

    productos = categoria.products
    productos_serializados = [producto.serialize() for producto in productos]
    print(productos_serializados)

    return jsonify(productos_serializados)


@api.route('/deleteproduct/<int:product_id>', methods=["DELETE"])
@jwt_required()
def delete_product(product_id):
    try:
        current_user_id = get_jwt_identity()
        user = User_be.query.filter_by(id=current_user_id).first()

        if not user:
            return jsonify({"message": "User not found"}), 404

        # product = Product.query.filter_by(id=product_id, seller_id=user.id).first()
        product = Product.query.filter_by(id=product_id).first()

        if not product:
            return jsonify({"message": "Product not found or unauthorized"}), 404

        db.session.delete(product)
        db.session.commit()

        return jsonify({"message": "Product deleted successfully"}), 200

    except Exception as e:
        return jsonify({"message": str(e)}), 500
    
@api.route("/product/<int:productId>", methods=["GET"])
def get_product_by_id(productId):
    try:
        product = Product.query.get(productId)
        print(f"Solicitud recibida para producto ID: {productId}")

        if not product:
            return jsonify({"message": "Product not found"}), 404

        serialized_product = [product.serialize()]
        print("Enviando producto:", serialized_product)

        return jsonify(serialized_product), 200

    except Exception as e:
        return jsonify({"message": str(e)}), 500
        print("Error:", str(e))
    