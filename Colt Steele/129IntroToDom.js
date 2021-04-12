//Introduction to dom
 //DOM : Document Object Model
 // all are start from document keyword


//selecting the elements
 // getElementById
    // selecting elements by id name

    let paraId1 =document.getElementById('para1');
    console.log(paraId1);

 //getElementsByTagName
  // select elements by tag name

  let imgTag =document.getElementsByTagName('img');
  console.log(imgTag);

  //getElementsByClassName

  let classId = document.getElementsByClassName('para');
  console.log(classId);

  //querySelector
  // this return only single element
   //select by class name
  document.querySelector('.para');
  
  //select by id name
  document.querySelector('#para1');

  // selecting by tag name
  document.querySelector('h1');

 //querySelectorAll
  // this return all matching result
   //select by class name
  document.querySelectorAll('.para');
  
  //select by id name
  document.querySelectorAll('#para1');

  // selecting by tag name
  document.querySelectorAll('h1');
  
