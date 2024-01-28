
import click
from api.models import db, User_be, Province, Category


"""
In this file, you can add as many commands as you want using the @app.cli.command decorator
Flask commands are usefull to run cronjobs or tasks outside of the API but sill in integration 
with youy database, for example: Import the price of bitcoin every night as 12am
"""
def setup_commands(app):
    
    """ 
    This is an example command "insert-test-users" that you can run from the command line
    by typing: $ flask insert-test-users 5
    Note: 5 is the number of users to add
    """
    @app.cli.command("insert-test-users") # name of our command
    @click.argument("count") # argument of out command
    def insert_test_users(count):
        print("Creating test users")
        for x in range(1, int(count) + 1):
            user = User_be()
            user.email = "test_user" + str(x) + "@test.com"
            user.password = "123456"
            user.is_active = True
            db.session.add(user)
            db.session.commit()
            print("User: ", user.email, " created.")

        print("All test users created")

    @app.cli.command("insert-test-data")
    def insert_test_data():
        pass

    @app.cli.command("create-provinces")
    def create_provinces():
        # Lista de provincias de España
        Province.query.delete()

        spanish_provinces = [
            "Álava", "Albacete", "Alicante", "Almería", "Asturias", "Ávila", "Badajoz", "Barcelona",
            "Burgos", "Cáceres", "Cádiz", "Cantabria", "Castellón", "Ciudad Real", "Córdoba",
            "Cuenca", "Gerona", "Granada", "Guadalajara", "Guipúzcoa", "Huelva", "Huesca", "Islas Balears",
            "Jaén", "La Coruña", "La Rioja", "Las Palmas", "León", "Lérida", "Lugo", "Madrid", "Málaga",
            "Murcia", "Navarra", "Orense", "Palencia", "Pontevedra", "Salamanca", "Santa Cruz de Tenerife",
            "Segovia", "Sevilla", "Soria", "Tarragona", "Teruel", "Toledo", "Valencia", "Valladolid", "Vizcaya",
            "Zamora", "Zaragoza"
        ]

        print("Creating provinces")
        for province_name in spanish_provinces:
            province = Province(name=province_name)
            db.session.add(province)

        db.session.commit()
        print("All provinces created")

    @app.cli.command("create-categories")
    def create_categories():

        categories = [
            "Albañileria", "Carpinteria", "Cerrajeria", "Electricista",
            "Fontaneria", "Jardineria", "Limpieza", "Manitas",
            "Mudanzas", "Pintura", "Reformas", "Refrigeracion"
        ]

        for category_name in categories:
            category = Category(name=category_name)
            db.session.add(category)

        db.session.commit()

    