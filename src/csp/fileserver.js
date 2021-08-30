function control($scope, $http) {
    
	// Get list of files
    $scope.getFiles = function () { 
        $http.get("/fileserver/getfilelist").success(
        	function (data) 
        	{
            	$scope.files = data.children;
        	}).error(
        	function (data, status) 
        	{  
        		$scope.alerts.push({ type: "error", msg: "Error downloading filelist" });
      		})
	};
	
	$scope.FileLoad=function(){
        var formData = new FormData();
        for(var i=0;i<document.getElementById("myFile").files.length;i++){
            formData.append("fotofile"+i, document.getElementById("myFile").files[i]);
        }
        var reader = new FileReader;
        reader.readAsDataURL(document.getElementById("myFile").files[0]);
        var place = document.getElementById("Logo");

        var xhr = new XMLHttpRequest();

        // Upload data to server
        xhr.open("POST", "/fileserver/upload", true);
        xhr.upload.onprogress = function(e) { // <<<
            if (e.lengthComputable) {
                progressBar.value = (e.loaded / e.total) * 100;
            }
        };
        xhr.upload.onloadend=function(e){
             progressBar.value = 100;

        }
        xhr.onreadystatechange=function(e){
            if (xhr.readyState == 4) {
                $scope.ddd=xhr.responseText;
                var val = document.getElementById("adjrgsaderg");
                val.value=xhr.responseText;
            }
        }
        xhr.send(formData);
        
        $scope.getFiles();
    };

	
 };