"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
import bcrypt

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hola desde del Backend"
    }

    return jsonify(response_body), 200


@api.route("/registro", methods=['POST'])
def user_registro():
    body = request.get_json()
    new_pass = bcrypt.hashpw(body["password"].encode(), bcrypt.gensalt())
    new_user = User()
    new_user.username = body["username"]
    new_user.email = body["email"]
    new_user.password = new_pass.decode()
    new_user.is_active = True

    db.session.add(new_user)
    db.session.commit()
 
    return jsonify("Usuario creado correctamente"), 200