from admin_example import db

db.create_all()

from admin_example import Person

anthony = Person(name='Anthony')
db.session.add(anthony)
db.session.commit()