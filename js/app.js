function insertDash() {
    let phoneNumber = document.getElementById('num-input').value;
    let phoneStr = phoneNumber.toString();
    let data ="";
    let result = [phoneStr[0]];
    for (let i = 1; i < phoneStr.length; i++) {
        if ((phoneStr[i-1] % 2 === 0) && (phoneStr[i] % 2 === 0)) {
            result[i] = "-" + phoneStr[i];
        }
        else {
            result[i] = phoneStr[i];
        }
    }
    data = result.join('');
    document.getElementById('result').innerHTML = data;
    }



