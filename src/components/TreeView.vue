<template>
    <div id="treeView" style="overflow: auto">
        <div id="treeInnerView" ref="innerTreeView">
            <ul>
                <li data-id="0" @click="treeItemClicked"><span>Root</span></li>
                <ul data-parent-id="0" style="display: none"></ul>
            </ul>
        </div>
    </div>
</template>

<script>
    import $ from 'jquery'

    export default {
        name: "TreeView",
        data: function () {
            return {
                treeItems: []
            }
        },
        methods: {
            loadTreeData: function () {

                this.treeItems.push({id: 1, parentId: 0, label: 'First Child'});
                this.treeItems.push({id: 2, parentId: 0, label: 'Second Child'});
                this.treeItems.push({id: 3, parentId: 1, label: 'First Grand Child'});
                this.treeItems.push({id: 4, parentId: 1, label: 'Second Grand Child'});
                this.treeItems.push({id: 5, parentId: 2, label: 'Hello'});
                this.treeItems.push({id: 6, parentId: 2, label: 'World'});
                this.treeItems.push({id: 7, parentId: 5, label: 'Wonderful World'});
                this.treeItems.push({id: 8, parentId: 3, label: 'This is a long label for scroll test'});
                this.treeItems.push({id: 9, parentId: 8, label: 'This is a long label for scroll test'});
            },
            showRoot: function () {
                let ul = document.createElement('ul')
                let li = document.createElement('li')
                li.classList.add('closed')
                li.setAttribute('data-id', '0')

                li.appendChild(document.createTextNode('Root'))
                ul.appendChild(li)

                let parent = this.$refs['innerTreeView']
                parent.appendChild(li)

                console.log(parent)
            },
            showTree: function () {
                // this.showRoot()

                let root = this.$refs['innerTreeView']

                for (let i = 0; i < this.treeItems.length; i++)
                {
                    let item = this.treeItems[i];
                    let itemId = item['id']
                    let parentId = item['parentId'];

                    let parentLi = $(root).find('li[data-id="' + parentId + '"]')
                    parentLi.addClass('closed')

                    let ul = parentLi.next()
                    let li = $('<li data-id="' + itemId + '"><span>' + item['label'] + '</span></li>')
                    li[0].addEventListener('click', this.treeItemClicked)
                    ul.append(li)

                    let ul2 = $('<ul style="display: none"></ul>')
                    ul.append(ul2)
                }

                let li = root.querySelector('li[data-id="0"]')
                this.openTree(li)
            },
            openTree: function (li) {
                li.classList.remove('closed')
                li.classList.add('opened')
                li.nextSibling.style.display = ''
            },
            closeTree: function (li) {
                li.classList.remove('opened')
                li.classList.add('closed')
                li.nextSibling.style.display = 'none'
            },
            treeItemClicked: function (e) {
                let target = e.target;
                if (target.tagName == 'LI')
                {
                    if (target.classList.contains('closed'))
                        this.openTree(target)
                    else
                        this.closeTree(target)
                }
                else if (target.tagName == 'SPAN')
                {
                    let root = this.$refs['innerTreeView']
                    $(root).find('.active').removeClass('active');
                    $(target).addClass('active')
                }
            }
        },
        mounted() {
            this.showTree()
        },
        created() {
            this.loadTreeData()
        }
    }
</script>

<style>
    #treeView {
        display: flex;
        flex-flow: column;
        border-right: 1px solid #dddddd;
        height: 100%;
    }
    #treeInnerView {
        flex-grow: 1;
    }
    #treeView ul {
        padding-left: 1em;
    }
    #treeView li {
        list-style: none;
        padding-left: 1em;
        white-space: nowrap;
        cursor: pointer;
    }
    #treeView li span {
        cursor: pointer;
        white-space: nowrap;
    }
    #treeView li span.active {
        background-color: #f8f8f8;
        color: #3e82cf;
    }
    #treeView li.opened {
        background-image: url("../assets/img/icons8-sort-down-24.png");
        background-repeat: no-repeat;
        background-size: 0.8em;
        background-position-y: center;
        background-position-x: left;
    }
    #treeView li.closed {
        background-image: url("../assets/img/icons8-play-24.png");
        background-repeat: no-repeat;
        background-size: 0.8em;
        background-position-y: center;
        background-position-x: left;
    }
</style>