export const tourCreate=async (name)=>{
    
    try{
        console.log(name)
    //     const res=await axios({
    //         method:'POST',
    //         url:'http://localhost:3000/api/v1/users/login',
    //         data:{
    //             email,
    //             password
    //         }
        // });

    //     if(res.data.status==='success'){
    //         showAlert('success','Logged in successfully');
    //         window.setTimeout(()=>{
    //             location.assign('/')
    //         },1500)
    //     }
    //     console.log(res);

    }catch(err){
        console.log(err)
    //     showAlert('error',err.response.data.message)
    }
    
};
