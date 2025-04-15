function showToast(type) 
{
    const toast = document.createElement('div');
    toast.classList.add('toast', type);
    
    const messages = 
    {
      success: '✅ Success: This is a success toast!',
      error: '❌ Error: This is an error toast!',
      warning: '⚠️ Warning: This is a warning toast!',
      info: 'ℹ️ Info: This is an info toast!',
    };
  
    toast.textContent = messages[type];
    document.getElementById('toast-container').appendChild(toast);
  
    setTimeout(() => {
      toast.remove();
    }, 3000);
  }
  