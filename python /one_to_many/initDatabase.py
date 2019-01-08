from one_to_many import db

# db.create_all()

from one_to_many import Pet, Person


anthony = Person(name='Anthony')
# db.session.add(anthony)
# db.session.commit()

michelle = Person(name='Michelle')
# db.session.add(michelle)
# db.session.commit()
#
# spot = Pet(name='Spot',owner=anthony)
# db.session.add(spot)
# db.session.commit()
#
# brian = Pet(name='Brian',owner=michelle)
# db.session.add(brian)
# db.session.commit()
#
# some_owner = Person.query.filter_by(name='Anthony').first()
#
# clifford = Pet(name='Clifford',owner=some_owner)
# db.session.add(clifford)
# db.session.commit()
#
anthony=Person.query.filter_by(name='Anthony').first()
print(anthony.id)
print(anthony.pets[0].name)
#
# spot = Pet.query.filter_by(name='Spot').first()
# #spot.name
# #spot.owner.name
# #spot.owner_id
