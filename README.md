<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script src="https://kit.fontawesome.com/e99e1a6597.js" crossorigin="anonymous"></script>
   
    <style>
        @import url(https://fonts.googleapis.com/css?family=Noto+Sans+TC:100,400,500,700,900&display=swap);
       
        * {
            padding: 0;
            margin: 0;
            list-style: none;
            font-family: 'Noto Sans TC', sans-serif;
        }
        html,body{
            height: 100%;
        }
        body{
            display: flex;
            align-items: center;
            background: linear-gradient(-45deg,#fffaf0,#f8c3c1);
        }
        .wrap{
            width: 1200px;
            margin:100px auto;
          
            display: flex;
            padding-top: 75px;
        }
        .wrap .item{
            width: 370px;
            margin: 0 15px;
            text-align: center;
            border: 10px solid #f9cec2;
            border-radius: 20px;
            background-color: #fff;
            box-shadow: 10px 20px 50px #f7b6a7;
        }
        .item .icon{
            width: 150px;
            height: 150px;
            background-color: #fff;
            margin:-75px auto 0;
            font-size: 85px;
            line-height: 145px;
            border-radius: 50%;
            position: relative;
            color:#f5afac ;
            
        }
        .item .icon::before{
            content: "";
            width: 100%;
            height: 100%;
            border-top:10px solid #f9cec2;
            border-right:10px solid #f9cec2 ;
            border-left: 10px solid transparent;
            border-bottom:10px solid transparent ;
            border-radius: 50%;
            position: absolute;
            transform: rotate(-45deg);
            left: -10px;
            top: -10px;
        }
        .item:hover .fa{
            animation: shake .2s linear infinite  alternate;
        }
        .item h3{
            color: #f5afac;
        }
        .item p{
            color: #ccc;
        }
        .txt{
            padding: 20px 20px 2em;
        }

        @keyframes shake {
            0%{transform: rotate(-15deg);}
            100%{transform: rotate(15deg);}
        }
    </style>
</head>

<body>

    <div class="wrap">
        <div class="item">
            <div class="icon">
                <i class="fa fa-gavel" aria-hidden="true"></i>
            </div>
            <div class="txt">
                <h3>說你好</h3>
                <p>收購金融知識注重水果電視劇採購寫作網際快車三年鈴聲下載，保育石虎勝利作業就好給他心中實行一段時間促進原創，西安主流雙方跟我很久對了一體模式釣魚每年婦女起來定位的說應當，金錢寂寞長時間突破想起是我材料怎麼樣故事寫真，工資穿著，你要工藝戀愛，任何部落格回去青。
                </p>
            </div>
        </div>
        <div class="item">
            <div class="icon">
                <i class="fa fa-thumbs-up" aria-hidden="true"></i>
            </div>
            <div class="txt">
                <h3>說你好</h3>
                <p>收購金融知識注重水果電視劇採購寫作網際快車三年鈴聲下載，保育石虎勝利作業就好給他心中實行一段時間促進原創，西安主流雙方跟我很久對了一體模式釣魚每年婦女起來定位的說應當，金錢寂寞長時間突破想起是我材料怎麼樣故事寫真，工資穿著，你要工藝戀愛，任何部落格回去青。
                </p>
            </div>
        </div>
        <div class="item">
            <div class="icon">
                <i class="fa fa-bell" aria-hidden="true"></i>
            </div>
            <div class="txt">
                <h3>說你好</h3>
                <p>收購金融知識注重水果電視劇採購寫作網際快車三年鈴聲下載，保育石虎勝利作業就好給他心中實行一段時間促進原創，西安主流雙方跟我很久對了一體模式釣魚每年婦女起來定位的說應當，金錢寂寞長時間突破想起是我材料怎麼樣故事寫真，工資穿著，你要工藝戀愛，任何部落格回去青。
                </p>
            </div>
        </div>

    </div>
</body>

</html>
