window.onload=function  () {
	// 1.在控制台中输出10行*
	
	// var star=function(){
	// 	for(var i=0;i<5;i++){
	// 		var aa='';
	// 		for(var j=0;j<i+1;j++){
	// 			aa+='*';
	// 		}
	// 		console.log(' ');
	// 		console.log(aa);
	// 	}
	// }
	// star();
	// 2.在页面中输出5行*
	// document.write('*');
	// document.write('<br/>');
	// document.write('*');
// 	var star=function(){
// 		for(var i=0;i<5;i++){
// 			for(var k=0;k<5-i;k++){
// 				document.write('&nbsp');
// 			}
// 			for(var j=0;j<i*2+1;j++){
// 			document.write(' ');
// 			document.write('*');
// 		}	
// 			document.write('<br/>');
// 	}
// }
// star();

	// 3写一个函数，在页面中用定位创建28个元素
	// 28个元素动用定位 1.1（top:0） 2.2(top:30px)....7.7(top:...)
	var head=document.getElementById('hd');
	var startA=document.getElementById('startA');
	var startP=document.getElementById('startP');
	var endA=document.getElementById('endA');
	var end=document.getElementById('end');
	var kaishi=document.getElementsByClassName('kaishi');
	kaishi[0].onclick=function(){
		location.reload();
	}
	var fn3=function(){
		for(var i=0;i<7;i++){
			for(var j=0;j<i+1;j++){
		var poker=document.createElement('div');
			poker.setAttribute('class','poker');
			poker.setAttribute('id',i+'_'+j);
			head.appendChild(poker);
			poker.style.top=i*50+'px';
			poker.style.left=(6-i)*90+j*180+'px';
			poker.style.webkitTransition='all 1s ease';
			}
		}

		var ershisi='ershisi';
		for(var i=0;i<24;i++){
			var ershisi=document.createElement('div');	
			ershisi.setAttribute('class','poker'+' '+'ershisi');
			ershisi.setAttribute('id',8+'_'+i);
			startP.appendChild(ershisi);
		}
		var poker=document.getElementsByClassName('poker');
		var jishu=0;
		var mafang=setInterval(function(){
			poker[jishu].style.webkitTransform='rotate(360deg)';

			jishu++;
			if(jishu>poker.length-1){clearInterval(mafang)}
		},10)
	}
fn3();


// 4事件委托
// head.onclick=function(e){
// 	if(e.target==this){return};
// 	console.log(e);
// }
	var previous=null;
	var kaiguan=true;
	var firstnumber='',secondnumber='';
	head.onclick=function(e){
 	if(e.target==this){return};
 	var Id=e.target.getAttribute('id');
 	console.log(Id);
 	var x=Number(Id.split('_')[0]);
 	console.log(x);
 	var y=Number(Id.split('_')[1]);
 	var nx=document.getElementById((x+1)+'_'+y);
 	console.log(nx);
 	var ny=document.getElementById((x+1)+'_'+(y+1));
 	if(nx||ny){return};
 	if(previous!=null){
 		previous.style.border='none';
 	}
 	var el=e.target;
 	el.style.border='3px solid red';
 	previous=el;

// console.log(el);
 if(kaiguan&&el.innerHTML!=''){
    if(el.innerHTML=='K'){            
    if(el.parentElement==hd){hd.removeChild(el);}
    if(el.parentElement==startP){startP.removeChild(el);}
    if(el.parentElement==end){end.removeChild(el);}
        return;
    }
     firstnumber=Number(el.innerHTML);
            if(el.innerHTML=='A'){firstnumber=1;}
            if(el.innerHTML=='Q'){firstnumber=12;}
            if(el.innerHTML=='J'){firstnumber=11;} 
            secondnumber=0;       
            // console.log('firstnumber:'+firstnumber);
            el1=el;
            kaiguan=false; 
        }else{
            if(el.innerHTML=='K'){            
                if(el.parentElement==hd){hd.removeChild(el);}
                if(el.parentElement==startP){startP.removeChild(el);}
                if(el.parentElement==end){end.removeChild(el);}
                return;
            }
            secondnumber=Number(el.innerHTML);
            if(el.innerHTML=='A'){secondnumber=1;}
            if(el.innerHTML=='Q'){secondnumber=12;}
            if(el.innerHTML=='J'){secondnumber=11;}            
            kaiguan=true;           
        }
        if(firstnumber+secondnumber==13){
            console.log(firstnumber+secondnumber);
            if(el1.parentElement==hd){hd.removeChild(el1);}
            if(el1.parentElement==startP){startP.removeChild(el1);}
            if(el1.parentElement==end){end.removeChild(el1);}

            if(el.parentElement==hd){hd.removeChild(el);}
            if(el.parentElement==startP){startP.removeChild(el);}
            if(el.parentElement==end){end.removeChild(el);}
            return;
        }
}
// 5.
var dict={1:'A',2:'2',3:'3',4:'4',5:'5',6:'6',7:'7',8:'8',9:'9',10:'10',11:'J',12:'Q',13:'K'}
// 写一个函数  生成一个随机数组 长度为13；【】里面为1到13的随机数;
// 遍历该数组，输出他
// var fn4=function(){
// 	var shuzu=[];
// 	for(var i=0;i<13;i++){
// 		shuzu[i]=Math.floor(Math.random()*13+1);
// 	}
// 	for(var j=0;j<shuzu.length;j++){
// 		console.log(dict[shuzu[j]]);
// 	}
// }
// fn4();

// 6.写一个函数，生成一副乱序的扑克牌
var kapai='';
var huase=['rd','bk','fk','mh'];
var fn5=function(){
	var zidian={};
	var poker=[],se,nu;
	while(poker.length!=52){
	for(var i=0;i<52;i++){
		se=huase[Math.floor(Math.random()*4)];
		nu=dict[Math.floor(1+Math.random()*13)];
		if(!zidian[se+nu]){
		poker.push({huase:se,number:nu});
		zidian[se+nu]=true;
	}
}
	}
	return poker;
}


var poker=fn5();
var els=document.getElementsByClassName('poker');
for(var i=0;i<poker.length;i++){
	els[i].innerHTML=poker[i].number;
	var pokerback=poker[i].huase+poker[i].number;
   	els[i].style.backgroundImage='url(./img/'+pokerback+'.jpg)';
   	// els[i].style.backgroundPosition='-5px -10px';




	// if(poker[i].huase=='rd'){
	// 	els[i].style.backgroundImage='url(./img/1.JPG)'
	// 	els[i].style.color='red';
	// }
	// if(poker[i].huase=='bk'){
	// 	els[i].style.backgroundImage='url(./img/2.jpg)'
	// 	els[i].style.color='black';
	// }
	// if(poker[i].huase=='fk'){
	// 	els[i].style.backgroundImage='url(./img/3.jpg)'
	// 	els[i].style.color='red';
	// }
	// if(poker[i].huase=='mh'){
	// 	els[i].style.backgroundImage='url(./img/9.png)'
	// 	els[i].style.color='black';
	// }
}




startA.onclick=function(){
	if(startP.lastElementChild!=null){
		end.appendChild(startP.removeChild(startP.lastElementChild));
	}
}
var jishi=0;
endA.onclick=function(){
	if(startP.lastElementChild==null){
		jishi++;
	
	if(jishi>=3){alert('还没点够');return}
		for(var j=0;j<24;j++){
		startP.appendChild(end.removeChild(end.lastElementChild))}
}

}
startA.onmousedown=function(e){
	e.preventDefault();
}
endA.onmousedown=function(e){
	e.preventDefault();
}
var kaishi=document.getElementsByClassName('kaishi');
kaishi[0].onclick=function(){
	window.location.reload();
}




















document.onmousedown=function(e){
	e.preventDefault();
}














}