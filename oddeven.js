// Print odd numbers in an array
        // Anonymous function
        console.log("Anonymous function");
        let numbers=function(arr){
            for(i=0;i<arr.length;i++)
            if(arr[i]%2!==0)
            console.log(arr[i]);
        }
        numbers([1,2,3,4,5,6,7,8,9]);

        //iife function
        console.log("iife function");
        (
            function(arr1)
            {
                for(i=0;i<arr1.length;i++)
                if(arr1[i]%2!==0)
                console.log(arr1[i]);
            }
        )([1,2,3,4,5,6,7,8,9]);

        //Arrow function
        console.log("Arrow function");
        let numbers1= arr=>{
            for(i=0;i<arr.length;i++){
                if(arr[i]%2!==0){
                    console.log(arr[i]);
                }
            }
        };
        numbers1([1,2,3,4,5,6,7,8,9]);
