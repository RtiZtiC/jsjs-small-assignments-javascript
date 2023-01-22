function chqUnique(arr){
    const newarr=[];
    for (let i=0;i<arr.length;i++){
        if(!newarr.includes(arr[i]))
        {
            newarr.push(arr[i]);
        }
    }
    if (arr.length > newarr.length)
    {
        console.log("dupllicate entries are present");
    }
    else{
        console.log("the array is  unique");
    }
}

chqUnique(['amartya','pradhan','rintu','laha','kratos','dipti'])