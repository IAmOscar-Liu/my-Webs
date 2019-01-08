
from flask import Flask, request,jsonify
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app, support_credentials=True)

@app.route("/")
@cross_origin(supports_credentials=True)
def index():
    return "Homepage"

@app.route("/bacon",methods=['GET','POST'])
@cross_origin(supports_credentials=True)
def bacon():
    if request.method == 'POST':
        #return "You are using POST"
        name=request.form['name']
        age = request.form['age']
        return jsonify({'success': 'POST','name':name,'age':age})

    else:
        #return "You are probably using GET"
        name = request.form['name']
        age = request.form['age']
        return jsonify({'success': 'GET','name':name,'age':age})


if __name__ == "__main__":
    app.run(debug=True)