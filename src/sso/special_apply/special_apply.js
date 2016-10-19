/**
 *  by cuihonglei 20160903
 */

'use strict';

import 'jquery';


console.log($)

import Vue from 'vue';

import vTop from '../widget/top';

import vSlider from '../widget/slider';

import vSpecform from '../widget/specform';

import './special_apply.less';

var page_index = location.href;

import API from '../config/requests.js';

var configfn = {
  onlineGET: 'https://passport.baidu.com/?logout',
   rdGET: 'https://passport.rdtest.baidu.com/?logout',
   qaGET: 'https://passport.qatest.baidu.com/?logout'
};

$(function() {
	var vim = new Vue({
		el: '#home',
		ready: function() {
			this.getroomlist();
            this.selectionfn();
            
		},
		data: function() {
			return {
				loginData: {
					index: page_index,
					name: 'cuihonglei',
					loginoutlink:configfn.rdGET
				},
				roomlist: {
					list: {

					},
					roomdata: {
						"zanbutton": {},
						"zanimg": [],
						"waterimg": {
							
						}
					}
				},
				waterimg:'',

				sliderData: {
					list: [
					{
						name: '创建直播预告',
						link: '/fe/video_sso/page/video_sso/home/index.html',
						status: false
					}, {
						name: '个性化配置申请',
						link: '/fe/video_sso/page/video_sso/special_apply/special_apply.html',
						status: true
					}]
				}
			}
		},

		components: {
			vTop,
			vSlider,
			vSpecform
		},
		methods: {
            selectionfn:function(){
            	var _this=this;

             	$("#selectroom").change(function(){

             		var roomid = $(this).find("option:selected").val();

             		_this.getroom(roomid);

                    

             	});
             	$("#waterform").change(function(){

             		var url = $(this).find("option:selected").data('url');

             		vim.waterimg = url;

                    

             	})
             },

			getroomlist: function() {

               var _this = this;
				$.ajax({
					url: API.roomlist,
					type: 'GET',
					success: function(data) {
                              
						if (data.status == 0) {
                               
							vim.roomlist.list = data.data;
                     
							_this.getroom(data.data[0].roomid);
					
						}

					},
					error: function() {
   
					}
				});
			},
			getroom: function(_id) {
				
				$.ajax({
					url:API.getroom,
					 data:{
					 	roomid:_id
					 },
					type: 'GET',
					success: function(data) {
                     
                          ///  console.log(data);

						if (data.status == 0) {
							
							 vim.roomlist.roomdata = data.data;
							 var _arr =[];

							 for(var i  in data.data.waterimg){
							 	  _arr.push(i)
							 }
 
							 
                            setTimeout(function(){

                            	vim.waterimg = data.data.waterimg[_arr[0]].url;

                            },1000)
						}

					},
					error: function() {

					}
				});
			}
		}
	})
})