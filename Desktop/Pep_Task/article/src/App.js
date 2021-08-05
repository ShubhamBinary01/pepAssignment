import './App.css';
import img1 from './img1.png'
import img2 from './img2.png'
import img3 from './img3.png'
import img4 from './img4.png'
import img5 from './img5.png'

function App() {
  return (
    <div>
      <h2 className='text-white text-center p-4'>
      Sub-arrays of an array
      </h2>
      <p className='text-white p-2'>Dear readers, We hope that you are enjoying your coding journey!
Let's now move to the next problem, that is <strong>‘Sub-arrays of an array’</strong> of chapter <strong></strong>.  This is a bit of a different problem but an easy one. Before moving to the problem, we ask you, what actually are subarrays of an array. 
You might have studied about a subset of a set in your school. Well, like a subset, a sub-array is an array of a length smaller or equal to the given array’s length, whose members are all members of the given array. But unlike a sub-set, in a sub-array, the sequence should be contiguous. 
<br/>Let’s jump to the problem.
</p>
<h5 className='text-white  p-2'>Understanding the Problem:  </h5>
<p className='text-white  p-2'>In the question as it says, you are given an array of size 'n' and n elements of the same array. We are required to find and print all the subarrays of the given array. 
So, the input part is easy. We can take input of an array straightforwardly. Then skip to the crucial part, in which we will think about the solution of the problem.

Before moving to the solution part, make sure you try to solve it on your own. Like, Rob Siltanen said,“People who are crazy enough to think they can change the world, are the ones who do.” 
You may also take help from the question video, where our team has particularly explained what exactly is required to be done.
Now, we are ready to move to the solution part. 
</p>
<h5 className='text-white  p-2'>Moving on:</h5>
<p className='text-white  p-2'>We are given an array of integers. We need to print all the possible subarrays of this array. Now, a sub-array is a slice from the array which is contiguous (i.e., occupy consecutive positions) and inherently maintains the order of elements. For example, the sub-arrays of the array {1, 2, 3} are {1}, {1, 2}, {1, 2, 3}, {2}, {2, 3}, and {3}. We need to print these sub-arrays on different lines and also there should be a tab space in between the printed sub-array sequences, like shown below.</p>
<img src = {img1} className='rounded float-left p-3' />
<img src = {img2} className='rounded  float-right p-4' />
<p className='text-white p-2'>These above lines of code help to take required 
input that is, number n and corresponding n elements for input array.
I hope that you are with us till here. Just show a bit more patience and we will soon look at the part where we will finally solve this problem.
</p>
<p className='text-white p-2'>So, next comes <strong>HOW?</strong> <br/>
For solving this problem, we make use of three loops; two loops for traversing the array and one for printing the elements of the array.
</p>
<img src = {img3} className='rounded  float-left p-4' />
<p className='text-white p-2'>In the diagram below, you can see dry run of this code for an array arr of length 3 and a, b, c as its element that is for an input of:    3      a      b     c
Before jumping to the diagram, I advise you to try it on your own and write the desired output for the code. And then crosscheck it with the below output.

<br /><br/>Did you get the correct output? Great. If not, don’t feel bad just continue reading.<br />

As the value of i is initialized to 0, therefore j and k also get initialized to 0. And on entering the third loop, arr[0] which is “a” gets printed. K gets incremented with one. K doesn’t satisfy the condition, so loop breaks.<br /><br/>
  
Now j gets incremented with one, k again gets initialized to 0. Inside k loop, which runs two time that is for k = 0 and k = 1, “a	b” gets printed, this time, satisfying the conditions.
Control now comes to the j loop, j gets incremented with one. J now becomes 2. K again gets initialized to 0. Inside the k loop, which runs three times, that is for k = 0,  k = 1 and k = 2, “a       b      c” gets printed, this time, satisfying the conditions. Control now comes to the i loop.
Give it a try and similarly run for i = 1 and i=2. You are advised to watch [01:38-03:53] portion of the video for better understanding of the code.
</p>

<img src = {img4} className='rounded float-left p-4' />

<h5 className='text-white  p-2'>Complete code:</h5>
<img src = {img5} className='rounded float-left p-3' />
<p className='text-white p-2'>So reader, we hope you understood the solution. Don't worry if you were not able to solve this problem by yourself at first, just keep practicing. Opportunities are endless. 
However, if you still face any difficulties in the solution for the problem, you may visit the complete solution video.
We will see you again in the next problem. Till then, keep learning. 
Happy coding!<br/><br/>

<strong>Contributed by:</strong> Nikita Aggarwal
</p>

</div>
  );
}

export default App;
