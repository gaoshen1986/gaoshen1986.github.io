<!DOCTYPE HTML>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta name="Keywords" content="blog"/>
    <meta name="Description" content="blog"/>
    <title>Simple</title>
    <link rel="shortcut icon" href="/static/favicon.png"/>
    <link rel="stylesheet" type="text/css" href="/main.css" />
</head>
<body>
<div class="main">
    <div class="header">
    	<ul id="pages">
            <li><a href="/">home</a></li>
            <li><a href="/#/tags">tags</a></li>
            <li><a href="/#/archive">archive</a></li>
    	</ul>
    </div>
	<div class="wrap-header">
	<h1>
    <a href="/" id="title"></a>
	</h1>
	</div>
<div id="md" style="display: none;">
<!-- markdown -->
创建UDP客户端的典型过程为：首先调用socket()函数，接下来定义发送和接收数据的远程主机和端口，然后用sendto()和recvfrom()来发送接收数据，如果使用sendto()和recvfrom()函数则可以在发送数据时再指定目标地址及端口。

除此之外UDP数据报的发送也可以使用write()、send()函数。如果使用write()或send()，则必须事先以UDP套接字为参数调用connect()函数。

与TCP不同的是，在UDP套接字上收发的数据是作为单独的单元接收或发送的，而不是作为字节流。每次调用write()、send()、或sendto()函数都会在线路上产生一个UDP数据报。接收到的UDP数据报的读取也是一个单独的操作，如果读取报文时提供的缓冲区长度不够，则会返回一个出错代码。

例如：

	sockaddr_in serv_addr;
    // create udp socket
    m_sock = socket(AF_INET, SOCK_DGRAM, 0);
    if (m_sock < 0)
    {
        return false;
    }
    memset(&serv_addr, 0, sizeof(struct sockaddr_in));
    serv_addr.sin_family = AF_INET;
    serv_addr.sin_addr.s_addr = inet_addr(m_serv_addr);
    serv_addr.sin_port = htons(m_serv_port);
    if (connect(m_sock, (struct sockaddr *)&serv_addr, sizeof(serv_addr))<0) 
    {
        fprintf(stderr,"connect fail.\n");
        return false;
    }
	char buf[]="abcdefg";
	send(m_sock,(void*)buf,sizeof(buf),0);
	
或者我们可以用sendto
	
	sockaddr_in serv_addr;
    // create udp socket
    m_sock = socket(AF_INET, SOCK_DGRAM, 0);
    if (m_sock < 0)
    {
        return false;
    }
    memset(&serv_addr, 0, sizeof(struct sockaddr_in));
    serv_addr.sin_family = AF_INET;
    serv_addr.sin_addr.s_addr = inet_addr(m_serv_addr);
    serv_addr.sin_port = htons(m_serv_port);

	char buf[]="abcdefg";
	sendto(m_sock,(void*)buf,sizeof(buf),0,(struct sockaddr *)&serv_addr,sizeof(serv_addr));


<!-- markdown end -->
</div>
<div class="entry" id="main">
<!-- content -->
<p>创建UDP客户端的典型过程为：首先调用socket()函数，接下来定义发送和接收数据的远程主机和端口，然后用sendto()和recvfrom()来发送接收数据，如果使用sendto()和recvfrom()函数则可以在发送数据时再指定目标地址及端口。</p>

<p>除此之外UDP数据报的发送也可以使用write()、send()函数。如果使用write()或send()，则必须事先以UDP套接字为参数调用connect()函数。</p>

<p>与TCP不同的是，在UDP套接字上收发的数据是作为单独的单元接收或发送的，而不是作为字节流。每次调用write()、send()、或sendto()函数都会在线路上产生一个UDP数据报。接收到的UDP数据报的读取也是一个单独的操作，如果读取报文时提供的缓冲区长度不够，则会返回一个出错代码。</p>

<p>例如：</p>

<pre><code>sockaddr_in serv_addr;
// create udp socket
m_sock = socket(AF_INET, SOCK_DGRAM, 0);
if (m_sock &lt; 0)
{
    return false;
}
memset(&amp;serv_addr, 0, sizeof(struct sockaddr_in));
serv_addr.sin_family = AF_INET;
serv_addr.sin_addr.s_addr = inet_addr(m_serv_addr);
serv_addr.sin_port = htons(m_serv_port);
if (connect(m_sock, (struct sockaddr *)&amp;serv_addr, sizeof(serv_addr))&lt;0) 
{
    fprintf(stderr,"connect fail.\n");
    return false;
}
char buf[]="abcdefg";
send(m_sock,(void*)buf,sizeof(buf),0);
</code></pre>

<p>或者我们可以用sendto</p>

<pre><code>sockaddr_in serv_addr;
// create udp socket
m_sock = socket(AF_INET, SOCK_DGRAM, 0);
if (m_sock &lt; 0)
{
    return false;
}
memset(&amp;serv_addr, 0, sizeof(struct sockaddr_in));
serv_addr.sin_family = AF_INET;
serv_addr.sin_addr.s_addr = inet_addr(m_serv_addr);
serv_addr.sin_port = htons(m_serv_port);

char buf[]="abcdefg";
sendto(m_sock,(void*)buf,sizeof(buf),0,(struct sockaddr *)&amp;serv_addr,sizeof(serv_addr));
</code></pre>
<!-- content end -->
</div>
<br>
<br>
    <div id="disqus_thread"></div>
	<div class="footer">
		<p>© Copyright 2014 by isnowfy, Designed by isnowfy</p>
	</div>
</div>
<script src="main.js"></script>
<script src="http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML"></script>
<script type="text/x-mathjax-config">
    MathJax.Hub.Config({tex2jax: {inlineMath: [['$','$'], ["\\(", "\\)"]], processEscapes: true}});
</script>
<script id="content" type="text/mustache">
    <h1>{{title}}</h1>
    <div class="tag">
    {{date}}
    {{#tags}}
    <a href="/#/tag/{{name}}">#{{name}}</a>
    {{/tags}}
    </div>
</script>
<script id="pagesTemplate" type="text/mustache">
    {{#pages}}
    <li>
        <a href="{{path}}">{{title}}</a>
    </li>
    {{/pages}}
</script>
<script>
$(document).ready(function() {
    $.ajax({
        url: "main.json",
        type: "GET",
        dataType: "json",
        success: function(data) {
            $("#title").html(data.name);
            var pagesTemplate = Hogan.compile($("#pagesTemplate").html());
            var pagesHtml = pagesTemplate.render({"pages": data.pages});
            $("#pages").append(pagesHtml);
            //path
            var path = "udp.gs";
            //path end
            var now = 0;
            for (var i = 0; i < data.posts.length; ++i)
                if (path == data.posts[i].path)
                    now = i;
            var post = data.posts[now];
            var tmp = post.tags.split(" ");
            var tags = [];
            for (var i = 0; i < tmp.length; ++i)
                if (tmp[i].length > 0)
                    tags.push({"name": tmp[i]});
            var contentTemplate = Hogan.compile($("#content").html());
            var contentHtml = contentTemplate.render({"title": post.title, "tags": tags, "date": post.date});
            $("#main").prepend(contentHtml);
            if (data.disqus_shortname.length > 0) {
                var disqus_shortname = data.disqus_shortname;
                (function() {
                    var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
                    dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
                    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
                })();
            }
        }
    });
});
</script>
</body>
</html>
