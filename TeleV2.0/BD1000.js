const bodyName = '中国电信'
const bodyVal = $request.body
const effective = bodyVal.indexOf("BILLCYCLE")
let loginerror=$persistentStore.read('Bodyswitch')

if (effective=="0"&&loginerror==1) {
    $persistentStore.write(bodyVal, "Tele_BD")
    let loginerror=0
    $persistentStore.wtite(loginerror,'Bodyswitch')
    if (bodyVal) {
        let msg = `${bodyName}`
            $notification.post(msg, 'Body写入成功',bodyVal )
            console.log(msg)
            console.log(bodyVal)
        }
    }
else{
    $notification.post("请点击已用流量","" ,"")
}

$done({})