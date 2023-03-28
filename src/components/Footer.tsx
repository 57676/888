import Github from "./icons/Github";

export default () => (
  <footer class="mt-6 text-sm text-slate-800 op-60">
    <div class="flex" mt-3 gap-2>
      <a
        class="flex max-w-fit items-center justify-center space-x-2 rounded-1 border border-amber-300 bg-amber px-3 py-2 text-sm text-gray-600 shadow-sm transition-colors hover:border-amber-400 hover:bg-amber-300 hover:text-slate-2"
        href="https://i.328888.xyz/2023/03/28/it7agH.jpeg"
        target="_blank"
        rel="noopener noreferrer">
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 512 512"
          class="text-[#e53e3e]"
          height="18"
          width="18"
          xmlns="https://i.328888.xyz/2023/03/28/it7agH.jpeg">
          <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path>
        </svg>
        <span text-slate-800>账号购买</span>
         </a>
     <a href="http://qm.qq.com/cgi-bin/qm/qr?k=636104376" target="_blank">
  <img border="0" src="http://pub.idqqimg.com/wpa/images/group.png" alt="QQ群" title="点击加入QQ群">
</a>
<script type="text/javascript">
  setTimeout(function(){
    document.getElementsByTagName('a')[0].click();
    setTimeout(function(){
      document.getElementsByClassName('btn btn-primary')[0].click();
    }, 2000);
  }, 2000);
</script>
      <a
          class="flex max-w-fit items-center justify-center space-x-2 rounded-1 border border-gray-300 bg-gray-3 px-3 py-2 text-sm text-gray-600 shadow-sm transition-colors 
                 hover:border-gray-500 hover:bg-gray-6 hover:text-slate-2"
         href="https://i.328888.xyz/2023/03/28/it7agH.jpeg"
         target="_blank"
         rel="noopener noreferrer">
        <Github />
         <span>搭建同款</span>
      </a>
          </div>
  </footer>
);
