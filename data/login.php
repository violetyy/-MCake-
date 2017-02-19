<?php
       header('Content-Type:application/json;charset=UTF-8');
       @$n= $_REQUEST['loginName'] or die('{"code":3, "msg":"loginName required"}');
       @$p= $_REQUEST['loginPwd'] or die('{"code":4, "msg":"loginPwd required"}');

      require('1_init.php');

      $sql = "SELECT * FROM mc_user WHERE uname='$n' AND upwd='$p'";
      $result = mysqli_query($conn,$sql);
      $row = mysqli_fetch_assoc($result);
      if($row===null){		//查询结果集中没有记录
        $output=['code'=>2,'msg'=>'用户名或密码错误'];
      }else {  //查询结果集中有数据,验证成功
        $output = ['code'=>1,'uname'=>$n,'uid'=>$row['uid']];
      }
      echo json_encode( $output );

?>