import React from 'react';

const AboutPage = () => (
  <article>
    <h2 className="blog-title" style={{ marginBottom: 20 }}>
      About Me
    </h2>
    <img src="/images/me.jpg" alt="Me" className="hz-about-image" />
    <p style={{ marginTop: -5 }}>
      I specialize in the design, building, and monitoring of high scale web applications, and handle
      everything from the backend to the front end, including site design, and system admin. I have over
      10 years working in the industry, and I understand my client&apos;s business needs. I&apos;m fluent in Linux
      and work well with command line tools. I understand web security inside and out, and I&apos;ve
      built and manage secure sites which get 20 million pageviews a day.
    </p>
    <p>
      I&apos;m author of several Go, React, Javascript, and PHP open source projects. Viewable from my Github
      account. I&apos;m a smart programmer who can learn any language/framework very quickly. I&apos;m also a
      craftsman,
      and I take pride in writing clean, well tested, and well documented code. I don&apos;t cut corners.
    </p>
    <p>
      I&apos;m resourceful, self-motivated, and take initiative. I&apos;ll never say,
      &quot;That&apos;s not my job.&quot; I do whatever
      it takes to get the project launched and make it a success. I&apos;m a former U.S. Marine, which makes me
      very detail oriented, loyal, and a hard worker. I don&apos;t make excuses. I get things done, and I work
      well in high stress environments with tight deadlines.
    </p>
    <h4>Skills</h4>
    <ul>
      <li>PHP, PHPUnit, Symfony 3, Laravel, CodeIgniter, WordPress, and custom MVC</li>
      <li>Javascript, Node, jQuery, Polymer, Angular, and React</li>
      <li>Go (Golang), Bash, Java, C#, and a touch of Python and C/C++</li>
      <li>HTML5, CSS, LESS, SASS, and Bootstrap</li>
      <li>MySQL, Memcached, Redis, MongoDB, and related SQL/NoSQL technologies</li>
      <li>AWS, Google App Engine, and related cloud hosting and CDN technologies</li>
      <li>FFMpeg and related video and image processing/transcoding/streaming technologies</li>
      <li>Nginx, Apache, OpenVPN, and Linux</li>
      <li>Docker, Chef, Git, and CI</li>
      <li>MogileFS, Hadoop, and HDFS</li>
      <li>Sphinx Search and Elasticsearch</li>
      <li>Gearman, Beanstalkd, RabbitMQ</li>
      <li>PredictionIO</li>
      <li>Photoshop</li>
    </ul>
  </article>
);

export default AboutPage;
