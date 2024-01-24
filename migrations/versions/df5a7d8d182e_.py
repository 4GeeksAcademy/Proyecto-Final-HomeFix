"""empty message

Revision ID: df5a7d8d182e
Revises: e026e6740ce5
Create Date: 2024-01-23 14:27:52.300740

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'df5a7d8d182e'
down_revision = 'e026e6740ce5'
branch_labels = None
depends_on = None


def upgrade():
    # ... (código existente)

    with op.batch_alter_table('product', schema=None) as batch_op:
        batch_op.add_column(sa.Column('province_id', sa.Integer(), nullable=True))
        batch_op.create_foreign_key('fk_product_province_id', 'province', ['province_id'], ['id'])  # Nombramos la restricción

    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.add_column(sa.Column('province_id', sa.Integer(), nullable=True))
        batch_op.create_foreign_key('fk_user_province_id', 'province', ['province_id'], ['id'])  # Nombramos la restricción

    # ... (código existente)

def downgrade():
    # ... (código existente)

    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.drop_constraint('fk_user_province_id', type_='foreignkey')  # Nombramos la restricción
        batch_op.drop_column('province_id')

    with op.batch_alter_table('product', schema=None) as batch_op:
        batch_op.drop_constraint('fk_product_province_id', type_='foreignkey')  # Nombramos la restricción
        batch_op.drop_column('province_id')

