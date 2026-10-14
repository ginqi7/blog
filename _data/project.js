export default function () {
  return {
    currentYear: new Date().getFullYear(),
    title: "Hello World",
    author: "Qiqi Jin",
    mail: "ginqi7@gmail.com",
    github: "https://github.com/ginqi7",
    indexPostSize: 10,
    baseURL: "/blog/",
    // RSS feed 需要绝对地址；baseURL 只是路径前缀，拼不出域名，所以要单独给一个。
    siteURL: "https://qiqijin.com/blog/",
  };
}
