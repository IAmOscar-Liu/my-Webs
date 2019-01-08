from app import db

db.create_all()

from app import Todo


# anthony = Person(name='Anthony')
# db.session.add(anthony)
# db.session.commit()
newUser = Todo(Nickname='Oscar',Email='ooo@gmail.com',Phone='(02)12345678',Gender=True)
db.session.add(newUser)
db.session.commit()
