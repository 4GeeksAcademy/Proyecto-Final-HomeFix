
import click
from api.models import db, User_be, Province, Category


def setup_commands(app):
    @app.cli.command("insert-test-users")
    @click.argument("count")
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
        with app.app_context():
            Category.query.delete()

        category_names = [
            "Albañileria", "Carpinteria", "Cerrajeria", "Electricidad",
            "Fontaneria", "Jardineria", "Limpieza", "Manitas",
            "Mudanzas", "Pintura", "Reformas", "Refrigeracion"
        ]

        print("Creando categorías")
        for category_name in category_names:
            category = Category(name=category_name)
            db.session.add(category)

        db.session.commit()
        print("Todas las categorías han sido creadas exitosamente")




    