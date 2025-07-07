// Clacky AI 教程自定义 JavaScript

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    
    // 添加页面加载动画
    addLoadingAnimation();
    
    // 优化代码块显示
    enhanceCodeBlocks();
    
    // 添加目录跳转功能
    addTableOfContents();
    
    // 添加阅读进度条
    addReadingProgress();
    
    // 添加返回顶部按钮
    addBackToTop();
    
    // 添加复制代码功能
    addCopyCodeButtons();
    
    // 添加图片懒加载
    addLazyLoading();
    
    // 添加搜索增强
    enhanceSearch();
});

// 页面加载动画
function addLoadingAnimation() {
    const loader = document.createElement('div');
    loader.className = 'page-loader';
    loader.innerHTML = '<div class="loading"></div>';
    document.body.appendChild(loader);
    
    window.addEventListener('load', function() {
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => loader.remove(), 300);
        }, 500);
    });
}

// 增强代码块
function enhanceCodeBlocks() {
    const codeBlocks = document.querySelectorAll('pre code');
    codeBlocks.forEach(block => {
        // 添加行号
        const lines = block.textContent.split('\n');
        if (lines.length > 1) {
            block.classList.add('line-numbers');
        }
        
        // 添加语言标签
        const language = block.className.match(/language-(\w+)/);
        if (language) {
            const label = document.createElement('span');
            label.className = 'code-language';
            label.textContent = language[1].toUpperCase();
            block.parentElement.appendChild(label);
        }
    });
}

// 添加目录
function addTableOfContents() {
    const headings = document.querySelectorAll('.markdown-section h1, .markdown-section h2, .markdown-section h3');
    if (headings.length < 3) return;
    
    const toc = document.createElement('div');
    toc.className = 'table-of-contents';
    toc.innerHTML = '<h4>📋 本页目录</h4><ul></ul>';
    
    const tocList = toc.querySelector('ul');
    
    headings.forEach((heading, index) => {
        // 为标题添加 ID
        if (!heading.id) {
            heading.id = `heading-${index}`;
        }
        
        const li = document.createElement('li');
        li.className = `toc-${heading.tagName.toLowerCase()}`;
        
        const a = document.createElement('a');
        a.href = `#${heading.id}`;
        a.textContent = heading.textContent;
        a.addEventListener('click', smoothScroll);
        
        li.appendChild(a);
        tocList.appendChild(li);
    });
    
    // 插入到第一个 h1 后面
    const firstH1 = document.querySelector('.markdown-section h1');
    if (firstH1) {
        firstH1.parentNode.insertBefore(toc, firstH1.nextSibling);
    }
}

// 平滑滚动
function smoothScroll(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// 阅读进度条
function addReadingProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'reading-progress';
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', function() {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

// 返回顶部按钮
function addBackToTop() {
    const backToTop = document.createElement('button');
    backToTop.className = 'back-to-top';
    backToTop.innerHTML = '↑';
    backToTop.title = '返回顶部';
    document.body.appendChild(backToTop);
    
    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    });
}

// 复制代码按钮
function addCopyCodeButtons() {
    const codeBlocks = document.querySelectorAll('pre');
    codeBlocks.forEach(block => {
        const button = document.createElement('button');
        button.className = 'copy-code-btn';
        button.innerHTML = '📋';
        button.title = '复制代码';
        
        button.addEventListener('click', function() {
            const code = block.querySelector('code');
            const text = code.textContent;
            
            navigator.clipboard.writeText(text).then(function() {
                button.innerHTML = '✅';
                button.title = '已复制';
                setTimeout(() => {
                    button.innerHTML = '📋';
                    button.title = '复制代码';
                }, 2000);
            });
        });
        
        block.appendChild(button);
    });
}

// 图片懒加载
function addLazyLoading() {
    const images = document.querySelectorAll('img');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => {
        img.classList.add('lazy');
        imageObserver.observe(img);
    });
}

// 搜索增强
function enhanceSearch() {
    const searchInput = document.querySelector('#book-search-input');
    if (!searchInput) return;
    
    // 添加搜索快捷键
    document.addEventListener('keydown', function(e) {
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            searchInput.focus();
        }
    });
    
    // 添加搜索提示
    const placeholder = searchInput.getAttribute('placeholder') || '搜索...';
    searchInput.setAttribute('placeholder', placeholder + ' (Ctrl+K)');
}

// 添加页面统计
function addPageStats() {
    const content = document.querySelector('.markdown-section');
    if (!content) return;
    
    const text = content.textContent;
    const wordCount = text.length;
    const readingTime = Math.ceil(wordCount / 500); // 假设每分钟阅读500字
    
    const stats = document.createElement('div');
    stats.className = 'page-stats';
    stats.innerHTML = `
        <span>📊 字数：${wordCount.toLocaleString()}</span>
        <span>⏱️ 预计阅读时间：${readingTime} 分钟</span>
    `;
    
    const firstH1 = content.querySelector('h1');
    if (firstH1) {
        firstH1.parentNode.insertBefore(stats, firstH1.nextSibling);
    }
}

// 主题切换功能
function addThemeToggle() {
    const toggle = document.createElement('button');
    toggle.className = 'theme-toggle';
    toggle.innerHTML = '🌙';
    toggle.title = '切换主题';
    document.body.appendChild(toggle);
    
    toggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');
        const isDark = document.body.classList.contains('dark-theme');
        toggle.innerHTML = isDark ? '☀️' : '🌙';
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
    
    // 恢复主题设置
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        toggle.innerHTML = '☀️';
    }
}

// 错误处理
window.addEventListener('error', function(e) {
    console.error('页面错误:', e.error);
});

// 性能监控
window.addEventListener('load', function() {
    if ('performance' in window) {
        const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
        console.log(`页面加载时间: ${loadTime}ms`);
    }
});
