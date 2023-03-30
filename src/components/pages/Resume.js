import React from 'react';
import resume from '../../assets/justin-canavan-resume.pdf'


export default function Resume() {
    return (
        <>
        <div class="container text-center col-5 mt-5 ">
        <a href={resume} download="justin-canavan-resume.pdf">Check out my resume!</a>
        <ul class="list-group">
  <li class="list-group-item" aria-current="true">Javascript</li>
  <li class="list-group-item">React</li>
  <li class="list-group-item">A third item</li>
  <li class="list-group-item">A fourth item</li>
  <li class="list-group-item">And a fifth one</li>
</ul>
</div>
</>
    )
}