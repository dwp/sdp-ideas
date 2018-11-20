// List view scripts
// Make each row of a table a clickable link
if(document.querySelector('.list-view-table')) {
    document.querySelectorAll('tr').forEach(function(row, index) {
        if(index !== 0) {
            row.addEventListener('click', controlSheetById);
        }
    });
}
// Grab the href from the <a>id</a> and navigate to it
function controlSheetById(e) {
    if(e.target.classList.contains('select-case-td')) {
        document.getElementById(e.target.dataset.click).click();
        return;
    }
    if(e.target.tagName === 'INPUT' || e.target.tagName === 'LABEL') {
        return;
    }
    if(e.target.tagName !== 'A') {
        // prevents a double request if the anchor tag is clicked
        this.childNodes[7].childNodes[0].click();
    }
}

document.querySelectorAll('.v1-tab-link').forEach(function(tab) {
    tab.addEventListener('click', changeTabs);
});

function changeTabs(e) {
    document.querySelectorAll('.v1-tab-link').forEach(function(tab) {
        tab.classList.remove('v1-active-tab');
    });
    this.classList.add('v1-active-tab');
    document.querySelectorAll('.v1-record-tab-wrapper').forEach(function(tab) {
        tab.classList.add('js-hidden');
    });
    document.getElementById(e.target.dataset.target).classList.remove('js-hidden');
}

if(document.querySelector('input[type="radio"], select')) {
    var allRevealers = document.querySelectorAll('input[type="radio"], select');
    allRevealers.forEach(function(revealer) {
        // adds the event listener for clicks
        revealer.addEventListener('change', revealHiddenOptions);
        // reveals neccesary inputs on load
        if(revealer.checked && revealer.dataset.target) {
            document.getElementById(revealer.dataset.target).classList.remove('js-hidden');
        }
    });
}

function revealHiddenOptions(e) {
    if(this.tagName === 'SELECT') {
        for(var i = 0; i < this.options.length; i++) {
            if(this.options[i].dataset.target) {
                var el = document.getElementById(this.options[i].dataset.target);
                if(!el.classList.contains('js-hidden')) {
                    el.classList.add('js-hidden');
                }
            }
        }
        if(document.getElementById(this.options[this.selectedIndex].dataset.target)) {
            document.getElementById(this.options[this.selectedIndex].dataset.target).classList.remove('js-hidden');
        }
    }
    if(this.checked && this.dataset.target) {
        document.getElementById(this.dataset.target).classList.remove('js-hidden');
    } else {
        var allParents = this.parentNode.parentNode.childNodes;
        allParents.forEach(function(parent) {
            var allChildren = parent.childNodes;
            allChildren.forEach(function(child) {
                if(child.dataset !== undefined) {
                    if(child.dataset.target !== undefined) {
                        document.getElementById(child.dataset.target).classList.add('js-hidden');
                    }
                }
            });
        });
    }
}
