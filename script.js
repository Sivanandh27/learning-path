function showPage(pageId){
  document.querySelectorAll('.page').forEach(page=>{
    page.classList.remove('active');
  });
  document.getElementById(pageId).classList.add('active');
  const postLoginPages = ['dashboard', 'paths', 'details', 'progress', 'resources', 'certificates'];
  if(postLoginPages.includes(pageId) || pageId === 'login'){
    document.body.style.background = "#37474f";
    document.body.classList.add('dark-text');
  } else {
    document.body.style.background = "#37474f";
    document.body.classList.remove('dark-text');

    
  document.getElementById("sidebar").classList.remove("active");
  document.body.classList.remove("sidebar-visible");
  }}
  
function handleLogin(){
  const username = document.getElementById('loginUsername').value.trim();
  const password = document.getElementById('loginPassword').value.trim();
  
  if(username && password){
    showPage('dashboard');

   
    document.getElementById("sidebar").classList.add("active");
    document.body.classList.add("sidebar-visible");

    document.getElementById('loginUsername').value = '';
    document.getElementById('loginPassword').value = '';
  } else {
    alert('Please fill in all fields');
  }
}

         
function handleRegister(){
  const username = document.getElementById('regUsername').value.trim();
  const password = document.getElementById('regPassword').value.trim();
  const confirmPassword = document.getElementById('regConfirmPassword').value.trim();
  
  if(username && password && confirmPassword){
    if(password === confirmPassword){

      showPage('dashboard');

     
      document.getElementById("sidebar").classList.add("active");
      document.body.classList.add("sidebar-visible");

      document.getElementById('regUsername').value = '';
      document.getElementById('regPassword').value = '';
      document.getElementById('regConfirmPassword').value = '';

    } else {
      alert('Passwords do not match');
    }
  } else {
    alert('Please fill in all fields');
  }
}