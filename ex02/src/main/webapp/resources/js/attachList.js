/**
 * 
 */
$(document).ready(function(){
	var bno=$("#bno").val();
	alert(bno);
	$.getJSON("getAttachList",{bno:bno},function(arr){
		//console.log(arr);
		var str="";
		$(arr).each(function(i,attach){
			// 첨부파일이 이미지이면,
			if(attach.filetype){
				var fileCallPath=encodeURIComponent(attach.uploadpath+"/s_"+attach.uuid+"_"+attach.filename);
				str+="<li data-path='"+attach.uploadpath+"' data-uuid='"+attach.uuid+"' data-filename='"+attach.filename+"' data-type='"+attach.filetype+"'><div>";
				str+="<img src='/display?filename="+fileCallPath+"'>";
				str+="</div></li>";
			}else{ // 그렇지 않으면
				str+="<li data-path='"+attach.uploadpath+"' data-uuid='"+attach.uuid+"' data-filename='"+attach.filename+"' data-type='"+attach.filetype+"'><div>";
				str+="<img src='/display?filename="+fileCallPath+"'>";
				str+="</div></li>";
			}// each함수 end
			$(".uploadResult ul").html(str);
		})
	})
})