import mangopay

mangopay.client_id='dmo_65ab763c2ee8b'
mangopay.apikey='KoJzc1AmwJvObVmLcv3PNjt6QeiY8v0MjCVJYM9HyHVUdu0V1g'


from mangopay.api import APIRequest
handler = APIRequest(sandbox=True)

from mangopay.resources import (User, NaturalUser)
from mangopay.utils import Address
from mangopay.resources import Wallet
from mangopay.resources import Transfer
from mangopay.resources import Money


transfer = Transfer(author=213995910,
                    credited_user="213994171",
                    debited_funds=Money(amount=1000, currency='EUR'),  # Create a EUR 10.00 transfer
                    fees=Money(amount=100, currency='EUR'),  # With EUR 1.00 of fees
                    debited_wallet="213995920",
                    credited_wallet="213994172")

transfer.save()
