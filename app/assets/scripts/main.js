function controlSheetById(t){t.target.classList.contains("select-case-td")?document.getElementById(t.target.dataset.click).click():"INPUT"!==t.target.tagName&&"LABEL"!==t.target.tagName&&"A"!==t.target.tagName&&this.childNodes[7].childNodes[0].click()}function changeTabs(t){document.querySelectorAll(".v1-tab-link").forEach(function(t){t.classList.remove("v1-active-tab")}),this.classList.add("v1-active-tab"),document.querySelectorAll(".v1-record-tab-wrapper").forEach(function(t){t.classList.add("js-hidden")}),document.getElementById(t.target.dataset.target).classList.remove("js-hidden")}if(document.querySelector(".list-view-table")&&document.querySelectorAll("tr").forEach(function(t,e){0!==e&&t.addEventListener("click",controlSheetById)}),document.querySelectorAll(".v1-tab-link").forEach(function(t){t.addEventListener("click",changeTabs)}),document.querySelector('input[type="radio"], select')){var allRevealers=document.querySelectorAll('input[type="radio"], select');allRevealers.forEach(function(t){t.addEventListener("change",revealHiddenOptions),t.checked&&t.dataset.target&&document.getElementById(t.dataset.target).classList.remove("js-hidden")})}function revealHiddenOptions(t){if("SELECT"===this.tagName){for(var e=0;e<this.options.length;e++)if(this.options[e].dataset.target){var a=document.getElementById(this.options[e].dataset.target);a.classList.contains("js-hidden")||a.classList.add("js-hidden")}document.getElementById(this.options[this.selectedIndex].dataset.target)&&document.getElementById(this.options[this.selectedIndex].dataset.target).classList.remove("js-hidden")}this.checked&&this.dataset.target?document.getElementById(this.dataset.target).classList.remove("js-hidden"):this.parentNode.parentNode.childNodes.forEach(function(t){t.childNodes.forEach(function(t){void 0!==t.dataset&&void 0!==t.dataset.target&&document.getElementById(t.dataset.target).classList.add("js-hidden")})})}