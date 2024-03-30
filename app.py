from flask import Flask,request, url_for, redirect, render_template
import pickle
import numpy as np

app = Flask(__name__)

model = pickle.load(open('model.pkl', 'rb'))



@app.route('/')
def hello_world():
    return render_template('new.html')


@app.route('/predict',methods=['POST','GET'])
def predict():
    data1 = request.form[1]
    data2 = request.form[1]
    data3 = request.form[1]
    data4 = request.form[0]
    data5 = request.form[1]
    data6 = request.form[1]
    data7 = request.form[1]
    data8 = request.form[0]
    data9 = request.form[1]
  
    arr = np.array([[data1, data2, data3, data4,data5, data6, data7, data8,data9]])
    pred = model.predict(arr)
    return render_template('new.html', data=pred)
    


   


if __name__== '_main_':
    app.run(debug=True)