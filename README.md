flex弹性布局
采用了flex布局的元素，成为flex容器。其所有的子元素则为flex项目（flex item）
1.容器默认存在两根轴：水平方向的主轴( main axis)与垂直方向上的交叉轴(cross axis)
主轴的起始点为 main start，结束位置为main end，同理垂直方向起始点类似。
2.容器的属性
(1)flex-direction
该属性决定主轴的方向
.box{
    flex-direction: row | row-reverse | column |column-reverse 
}
row:主轴为水平方向，从左向右
row-reverse：主轴为水平方向，从右向左
column：主轴为垂直方形，从上往下
column-reverse：主轴为垂直方向，从下往上

(2)flex-wrap
默认情况下，项目都排在一条线（又称"轴线"）上。flex-wrap属性定义，如果一条轴线排不下，如何换行。
.box{
    flex-wrap:nowrap|wrap|wrap-reverse;
}
nowrap:默认值，不换行，一溜排完
wrap：换行，第一行在上方
wrap-reverse：换行，第一个行在下方。

(3)flex-flow
flex-flow属性是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap
.box{
    flex-flow: <flex-direction> || <flex-wrap>;
}

(4)justify-content
属性定义了项目在主轴上的对齐方式。
.box{
    justify-content: flex-start |flex-end | center | space-between | space-around
}
flex-start（默认值）：左对齐
flex-end：右对齐
center： 居中
space-between：两端对齐，项目之间的间隔都相等。
space-around：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。

(5)align-items
属性定义项目在交叉轴上如何对齐。
.box{
    align-items: flex-start | flex-end | center | baseline | stretch
}
flex-start：交叉轴的起点对齐。
flex-end：交叉轴的终点对齐。
center：交叉轴的中点对齐。
baseline: 项目的第一行文字的基线对齐。
stretch（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。

(6)align-content
该属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。
.box {
  align-content: flex-start | flex-end | center | space-between | space-around | stretch;
}

3.项目的属性
(1)order
属性定义项目的排列顺序。数值越小，排列越靠前，默认为0。可为附属
(2)flex-grow
该属性定义了项目的扩大倍数，默认值为1。

(3)flex-shrink
该属性定义了项目的缩小倍数，默认值为1.值越大缩小倍数越大。

(4)flex-basis
属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。默认值为auto，即本来值。
当flex-direction:row;flex-basis：10px代表高度。
当flex-direction:crow;flex-basis代表宽度。

(5)flex
该属性是flex-grow, flex-shrink 和 flex-basis的简写。默认值为0 1 auto。后两个属性可选。
.item {
  flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
}

(6)align-self
属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。

.item {
  align-self: auto | flex-start | flex-end | center | baseline | stretch;
}