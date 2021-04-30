import axios from 'axios';
import {showAlert} from './alert'

export const tourCreate=async (name,ratingsQuantity,ratingsAverage,maxGroupSize,price,duration,summary,description)=>{
    
    try{
        console.log('tour-create',name)
        const res=await axios({
            method:'POST',
            url:'http://localhost:3000/api/v1/tours/tour-create',
            data:{
                name,
                ratingsQuantity,
                ratingsAverage,
                maxGroupSize,
                price,
                duration,
                summary,
                description
            }
        });

        if(res.data.status==='success'){
            showAlert('success','Created successfully');
            window.setTimeout(()=>{
                location.assign('/')
            },1500)
        }
        console.log(res);

    }catch(err){
        // console.log(err)
        showAlert('error',err)
    }
    
};
