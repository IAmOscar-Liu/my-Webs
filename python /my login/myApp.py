from flask import Flask, render_template, request, redirect, url_for,jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app, support_credentials=True)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///todo.db'

db = SQLAlchemy(app)

class Todo(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    Nickname = db.Column(db.String(200))
    Email = db.Column(db.String(200))
    Phone = db.Column(db.String(200))
    Gender = db.Column(db.Boolean)

@app.route('/search',methods=['POST'])
@cross_origin(supports_credentials=True)
def search():
    result = Todo.query.filter_by(Nickname=request.form['Nickname']).first()
    if result:
        return jsonify({'result':'yes'})
    else:
        return jsonify({'result':'no'})


@app.route('/getData',methods=['POST'])
@cross_origin(supports_credentials=True)
def getData():
    theData = []
    theResults = Todo.query.order_by(Todo.id).all()


    for _result in theResults:
        theData.append({'Nickname':_result.Nickname,'Email':_result.Email,'Phone':_result.Phone,'Gender':_result.Gender})
    return jsonify({'data':theData})


@app.route('/add', methods=['POST'])
@cross_origin(supports_credentials=True)
def add():
    _Gender = True
    if request.form['Gender'] == 'true':
        _Gender = True
    else:
        _Gender = False

    addName = Todo(Nickname=request.form['Nickname'],Email=request.form['Email'],Phone=request.form['Phone'],Gender=_Gender)
    db.session.add(addName)
    db.session.commit()

    return jsonify({'notice':'add'})

@app.route('/delete', methods=['POST'])
@cross_origin(supports_credentials=True)
def delete():

    result = Todo.query.filter_by(Nickname=request.form['Nickname']).first()
    db.session.delete(result)
    db.session.commit()

    return jsonify({'notice':'delete'})

if __name__ == '__main__':
    app.run(debug=True)
