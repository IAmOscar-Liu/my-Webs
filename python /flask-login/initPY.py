from main import db

db.create_all()

from main import User


# anthony = Person(name='Anthony')
# db.session.add(anthony)
# db.session.commit()
newUser = User(username='Anthony')
db.session.add(newUser)
db.session.commit()
