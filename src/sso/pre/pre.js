/*/*
import 'jquery';

console.log($);
/**
 *  by cuihonglei 20160903
 */

'use strict';

// Lib


import 'jquery';




import  'plugin/croppie/croppie.js';

import  'plugin/croppie/croppie.css';



import Vue from 'vue';

var page_index = location.href;

console.log($)

$(function(){

	new Vue({
		 el: '#home',
		 ready:function(){
		  var $uploadCrop;

		function readFile(input) {
 			if (input.files && input.files[0]) {
	            var reader = new FileReader();
	            
	            reader.onload = function (e) {
	            	$uploadCrop.croppie('bind', {
	            		url: e.target.result
	            	});
	            	$('.upload-demo').addClass('ready');
	                // $('#blah').attr('src', e.target.result);
	            }
	            
	            reader.readAsDataURL(input.files[0]);
	        }
	        else {
		        alert("Sorry - you're browser doesn't support the FileReader API");
		    }
		}

		$uploadCrop = $('#upload-demo').croppie({
			viewport: {
				width: 200,
				height: 200,
				type: 'circle'
			},
			boundary: {
				width: 300,
				height: 300
			}
		});

		$('#upload').on('change', function () { 
			$(".crop").show();
			readFile(this); 
		});
		$('.upload-result').on('click', function (ev) {
			$uploadCrop.croppie('result', 'canvas').then(function (resp) {
				popupResult({
					src: resp
				});
			});
		});
		
	function popupResult(result) {
		var html;
		if (result.html) {
			html = result.html;
		}
		if (result.src) {
			html = '<img src="' + result.src + '" />';
		}
		$("#result").html(html);
	}
		 },
		 data:function(){
		 	return{
		 		loginData:{
		 			index:page_index,
		 			name:'cuihonglei'
		 		},
		 		sliderData:{
		 			list:[
		 			{
		 				name:'权限管理',
		 				link:'#',
		 				status:true
		 			},
		 			{
		 				name:'创建直播预告',
		 				link:'/pre',
		 				status:false
		 			},
		 			{
		 				name:'个性化配置申请',
		 				link:'/apply',
		 				status:false
		 			}
		 			]
		 		}
		 	}
		 },
		 components:{
          /*  vTop,
            vSlider,
            vCrop*/
		 }
	})
})