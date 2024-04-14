from flask import Flask, request, jsonify , send_file
# from model import load_model_class, predict_single_image
import os
from werkzeug.utils import secure_filename
import subprocess

app = Flask(__name__)

UPLOAD_FOLDER = "upload"
ALLOWED_EXTENSIONS = {"jpg" , "pcap"}
app.config["UPLOAD_FOLDER"] = UPLOAD_FOLDER
app.config["JSON_AS_ASCII"] = False
app.config["MAX_CONTENT_LENGTH"] = 102400000

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


@app.route("/predict", methods=["POST"])
def predict():
    if request.method == "POST":
        if "image" not in request.files:
            return {"error": "No image provided"}, 400
        input_file = request.files["image"]
        if input_file.filename == '':
            return 'No selected file', 400
        if input_file and allowed_file(input_file.filename):
            model = load_model_class(model_path)
            res = predict_single_image(model, input_file)
            return {"message": "Prediction success", "data": res}
        else:
            return 'Invalid file type', 400
    else:
        return {"message": "Method not allowed", "data": None}

@app.route("/upload", methods=['POST'])
def handleFileUpload():
    if 'file' in request.files:
        photo = request.files['file']
        if photo.filename != '':
            filepath = os.path.join('api-ai/upload/', photo.filename.split('/')[-1])
            photo.save(filepath)
    
    cmd_command = "cicflowmeter -f /data/input/"+ "photo.filename.split("/")[-1]"+".pcap -c /data/output/o.csv"

# Sử dụng subprocess để chạy lệnh
    process = subprocess.Popen(cmd_command, stdout=subprocess.PIPE, stderr=subprocess.PIPE, shell=True)

# Đọc dữ liệu đầu ra và lỗi từ quá trình
    output, error = process.communicate()

    if error:
        return {"error": error.decode("utf-8")}, 400
    
    return send_file("/data/output/o.csv", as_attachment=True, attachment_filename="/data/output/o.csv")




if __name__ == "__main__":
    app.run(debug=True, host="localhost", port=5000)
