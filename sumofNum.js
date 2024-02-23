//Sum of all numbers in an array
        // Anonymous function
        let store=0;
        let sum=function(arr)
        
        {
            for(i=0;i<arr.length;i++)
            store=store+arr[i];
            console.log(store);

        }
        sum([1,2,3,4,5,6,7,8,9]);

        //iife function
        let store1=0;
        (
            function(arr){
            for(i=0;i<arr.length;i++)
            store1=store1+arr[i]
            console.log(store1);
            
            }
        )([1,2,3,4,5,6,7,8,9]);

        //arrow function
        let store2=0;
        let sum2=arr=>{
            for(i=0;i<arr.length;i++){
                store2=store2+arr[i]
                
            }
            console.log(store2);
        }
        sum2([1,2,3,4,5,6,7,8,9]);
