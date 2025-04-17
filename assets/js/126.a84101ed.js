(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{617:function(v,_,i){"use strict";i.r(_);var t=i(2),a=Object(t.a)({},(function(){var v=this,_=v.$createElement,i=v._self._c||_;return i("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[i("h2",{attrs:{id:"概述"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[v._v("#")]),v._v(" 概述")]),v._v(" "),i("p",[v._v("这里是 LeetCode 官方推出的动态规划精讲系列第一弹。")]),v._v(" "),i("p",[v._v("完成本 LeetBook 后，你将能够：")]),v._v(" "),i("ul",[i("li",[v._v("理解动态规划的基本思想")]),v._v(" "),i("li",[v._v("了解动态规划算法的优缺点和问题分类")]),v._v(" "),i("li",[v._v("掌握运用动态规划解决问题的思路")]),v._v(" "),i("li",[v._v("能够运用动态规划解决线性、前缀和、区间这三类问题")])]),v._v(" "),i("h2",{attrs:{id:"动态规划简介"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#动态规划简介"}},[v._v("#")]),v._v(" 动态规划简介")]),v._v(" "),i("h3",{attrs:{id:"动态规划的背景"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#动态规划的背景"}},[v._v("#")]),v._v(" 动态规划的背景")]),v._v(" "),i("p",[v._v("动态规划（英语：Dynamic programming，简称 DP）是一种在数学、管理科学、计算机科学、经济学和生物信息学中使用的，通过把原问题分解为相对简单的子问题的方式求解复杂问题的方法。")]),v._v(" "),i("p",[v._v("动态规划不是某一种具体的算法，而是一种算法思想：若要解一个给定问题，我们需要解其不同部分（即子问题），再根据子问题的解以得出原问题的解。")]),v._v(" "),i("p",[v._v("应用这种算法思想解决问题的可行性，对子问题与原问题的关系，以及子问题之间的关系这两方面有一些要求，它们分别对应了最优子结构和重复子问题。")]),v._v(" "),i("h4",{attrs:{id:"最优子结构"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#最优子结构"}},[v._v("#")]),v._v(" 最优子结构")]),v._v(" "),i("p",[v._v("最优子结构规定的是子问题与原问题的关系")]),v._v(" "),i("p",[v._v("动态规划要解决的都是一些问题的最优解，即从很多解决问题的方案中找到最优的一个。当我们在求一个问题最优解的时候，如果可以把这个问题分解成多个子问题，然后递归地找到每个子问题的最优解，最后通过一定的数学方法对各个子问题的最优解进行组合得出最终的结果。总结来说就是一个问题的最优解是由它的各个子问题的最优解决定的。")]),v._v(" "),i("p",[v._v("将子问题的解进行组合可以得到原问题的解是动态规划可行性的关键。在解题中一般用状态转移方程描述这种组合。例如原问题的解为 f(n)f(n)，其中 f(n)f(n) 也叫状态。状态转移方程 f(n) = f(n - 1) + f(n - 2)f(n)=f(n−1)+f(n−2) 描述了一种原问题与子问题的组合关系 。在原问题上有一些选择，不同选择可能对应不同的子问题或者不同的组合方式。例如")]),v._v(" "),i("p",[v._v("![](/Users/apple/Desktop/screenshot/截屏2021-11-11 下午4.41.16.png)")]),v._v(" "),i("p",[v._v("n = 2kn=2k 和 n = 2k + 1n=2k+1 对应了原问题 nn 上不同的选择，分别对应了不同的子问题和组合方式。")]),v._v(" "),i("p",[v._v("找到了最优子结构，也就能推导出一个状态转移方程 f(n)f(n)，通过这个状态转移方程，我们能很快的写出问题的递归实现方法。")]),v._v(" "),i("p",[i("img",{attrs:{src:"https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2020/08/06/1-1.png",alt:"img"}})]),v._v(" "),i("h4",{attrs:{id:"重复子问题"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#重复子问题"}},[v._v("#")]),v._v(" 重复子问题")]),v._v(" "),i("p",[v._v("重复子问题规定的是子问题与子问题的关系。")]),v._v(" "),i("p",[v._v("当我们在递归地寻找每个子问题的最优解的时候，有可能会重复地遇到一些更小的子问题，而且这些子问题会重叠地出现在子问题里，出现这样的情况，会有很多重复的计算，动态规划可以保证每个重叠的子问题只会被求解一次。当重复的问题很多的时候，动态规划可以减少很多重复的计算。")]),v._v(" "),i("p",[v._v("重复子问题不是保证解的正确性必须的，但是如果递归求解子问题时，没有出现重复子问题，则没有必要用动态规划，直接普通的递归就可以了。")]),v._v(" "),i("p",[v._v("例如，斐波那契问题的状态转移方程 f(n) = f(n - 1) + f(n - 2)。在求 f(5) 时，需要先求子问题 f(4) 和 f(3)，得到结果后再组合成原问题 f(5) 的解。递归地求 f(4) 时，又要先求子问题 f(3) 和 f(2) ，这里的 f(3) 与求 f(5) 时的子问题重复了。")]),v._v(" "),i("p",[i("img",{attrs:{src:"https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2020/08/09/1-2.png",alt:"img"}})]),v._v(" "),i("p",[v._v("解决动态规划问题的核心：找出子问题及其子问题与原问题的关系")]),v._v(" "),i("p",[v._v("找到了子问题以及子问题与原问题的关系，就可以递归地求解子问题了。但重叠的子问题使得直接递归会有很多重复计算，于是就想到记忆化递归法：若能事先确定子问题的范围就可以建表存储子问题的答案。")]),v._v(" "),i("p",[v._v("动态规划算法中关于最优子结构和重复子问题的理解的关键点：")]),v._v(" "),i("ol",[i("li",[v._v("证明问题的方案中包含一种选择，选择之后留下一个或多个子问题")]),v._v(" "),i("li",[v._v("设计子问题的递归描述方式")]),v._v(" "),i("li",[v._v("证明对原问题的最优解包括了对所有子问题的最优解")]),v._v(" "),i("li",[v._v("证明子问题是重叠的（这一步不是动态规划正确性必需的，但是如果子问题无重叠，则效率与一般递归是相同的）")])]),v._v(" "),i("h2",{attrs:{id:"线性动态规划"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#线性动态规划"}},[v._v("#")]),v._v(" 线性动态规划")]),v._v(" "),i("h3",{attrs:{id:"线性动态规划简介"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#线性动态规划简介"}},[v._v("#")]),v._v(" 线性动态规划简介")]),v._v(" "),i("p",[v._v("线性动态规划的主要特点是状态的推导是按照问题规模 i 从小到大依次推过去的，较大规模的问题的解依赖较小规模的问题的解。")]),v._v(" "),i("p",[v._v("这里问题规模为 i 的含义是考虑前 i 个元素 [0..i] 时问题的解。")]),v._v(" "),i("p",[v._v("状态定义：")]),v._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[v._v("dp[n] := [0..n] 上问题的解\n")])])]),i("p",[v._v("状态转移：")]),v._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[v._v("dp[n] = f(dp[n-1], ..., dp[0])\n")])])]),i("p",[v._v("从以上状态定义和状态转移可以看出，大规模问题的状态只与较小规模的问题有关，而问题规模完全用一个变量 i 表示，i 的大小表示了问题规模的大小，因此从小到大推 i 直至推到 n，就得到了大规模问题的解，这就是线性动态规划的过程。")]),v._v(" "),i("p",[v._v("按照问题的输入格式，线性动态规划解决的问题主要是单串，双串，矩阵上的问题，因为在单串，双串，矩阵上问题规模可以完全用位置表示，并且位置的大小就是问题规模的大小。因此从前往后推位置就相当于从小到大推问题规模。")]),v._v(" "),i("p",[v._v("线性动态规划是动态规划中最基本的一类。问题的形式、dp 状态和方程的设计、以及与其它算法的结合上面变化很多。按照 dp 方程中各个维度的含义，可以大致总结出几个主流的问题类型，见后面的小节。除此之外还有很多没有总结进来的变种问题，小众问题，和困难问题，这些问题的解法更多地需要结合自己的做题经验去积累，除此之外，常见的，主流的问题和解法都可以总结成下面的四个小类别。")]),v._v(" "),i("h3",{attrs:{id:"单串"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#单串"}},[v._v("#")]),v._v(" 单串")]),v._v(" "),i("p",[v._v("单串 dp[i] 线性动态规划最简单的一类问题，输入是一个串，状态一般定义为 dp[i] := 考虑[0..i]上，原问题的解，其中 i 位置的处理，根据不同的问题，主要有两种方式：")]),v._v(" "),i("ul",[i("li",[i("p",[v._v("第一种是 i 位置必须取，此时状态可以进一步描述为 dp[i] := 考虑[0..i]上，且取 i，原问题的解；")])]),v._v(" "),i("li",[i("p",[v._v("第二种是 i 位置可以取可以不取")])])]),v._v(" "),i("p",[v._v("大部分的问题，对 i 位置的处理是第一种方式，例如力扣：")]),v._v(" "),i("ul",[i("li",[v._v("70 爬楼梯问题")]),v._v(" "),i("li",[v._v("801 使序列递增的最小交换次数")]),v._v(" "),i("li",[v._v("790 多米诺和托米诺平铺")]),v._v(" "),i("li",[v._v("746 使用最小花费爬楼梯")])]),v._v(" "),i("p",[v._v("线性动态规划中单串 dp[i] 的问题，状态的推导方向以及推导公式如下")]),v._v(" "),i("p",[i("img",{attrs:{src:"https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2020/08/06/2-2-1.png",alt:"状态推导方向1"}})]),v._v(" "),i("h4",{attrs:{id:"_1-依赖比-i-小的-o-1-个子问题"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_1-依赖比-i-小的-o-1-个子问题"}},[v._v("#")]),v._v(" 1. 依赖比 i 小的 O(1) 个子问题")]),v._v(" "),i("p",[v._v("dp[n] 只与常数个小规模子问题有关，状态的推导过程 dp[i] = f(dp[i - 1], dp[i - 2], ...)。时间复杂度 O(n)O(n)，空间复杂度 O(n)O(n) 可以优化为 O(1)O(1)，例如上面提到的 70, 801, 790, 746 都属于这类。")]),v._v(" "),i("p",[v._v("如图所示，虽然紫色部分的 dp[i-1], dp[i-2], ..., dp[0] 均已经计算过，但计算橙色的当前状态时，仅用到 dp[i-1]，这属于比 i 小的 O(1)O(1) 个子问题。")]),v._v(" "),i("p",[v._v("例如，当 f(dp[i-1], ...) = dp[i-1] + nums[i] 时，当前状态 dp[i] 仅与 dp[i-1] 有关。这个例子是一种数据结构前缀和的状态计算方式，关于前缀和的详细内容请参考下一章。")]),v._v(" "),i("h4",{attrs:{id:"_2-依赖比-i-小的-o-n-个子问题"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_2-依赖比-i-小的-o-n-个子问题"}},[v._v("#")]),v._v(" 2. 依赖比 i 小的 O(n) 个子问题")]),v._v(" "),i("p",[v._v("dp[n] 与此前的更小规模的所有子问题 dp[n - 1], dp[n - 2], ..., dp[1] 都可能有关系。")]),v._v(" "),i("p",[v._v("状态推导过程如下：")]),v._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[v._v("dp[i] = f(dp[i - 1], dp[i - 2], ..., dp[0])\n")])])]),i("p",[v._v("依然如图所示，计算橙色的当前状态 dp[i] 时，紫色的此前计算过的状态 dp[i-1], ..., dp[0] 均有可能用到，在计算 dp[i] 时需要将它们遍历一遍完成计算。")]),v._v(" "),i("p",[v._v("其中 f 常见的有 max/min，可能还会对 i-1,i-2,...,0 有一些筛选条件，但推导 dp[n] 时依然是 O(n)O(n) 级的子问题数量。")]),v._v(" "),i("p",[v._v("例如：")]),v._v(" "),i("ul",[i("li",[i("p",[v._v("139 单词拆分")])]),v._v(" "),i("li",[i("p",[v._v("818 赛车")])])]),v._v(" "),i("p",[v._v("以 min 函数为例，这种形式的问题的代码常见写法如下")]),v._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[v._v("for i = 1, ..., n\n    for j = 1, ..., i-1\n        dp[i] = min(dp[i], f(dp[j])\n")])])]),i("p",[v._v("时间复杂度 "),i("em",[v._v("O")]),v._v("("),i("em",[v._v("n")]),v._v("2)，空间复杂度 O*(*n)")]),v._v(" "),i("h4",{attrs:{id:"单串-dp-i-经典问题"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#单串-dp-i-经典问题"}},[v._v("#")]),v._v(" 单串 dp[i] 经典问题")]),v._v(" "),i("p",[v._v("以下内容将涉及到的知识点对应的典型问题进行讲解，题目和解法具有代表性，可以从一个问题推广到一类问题。")]),v._v(" "),i("ol",[i("li",[v._v("依赖比 i 小的 O(1) 个子问题")])]),v._v(" "),i("blockquote",[i("ol",{attrs:{start:"53"}},[i("li",[v._v("最大子数组和")])]),v._v(" "),i("p",[v._v("给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。")])]),v._v(" "),i("p",[v._v("一个数组有很多个子数组，求哪个子数组的和最大。可以按照子数组的最后一个元素来分子问题，确定子问题后设计状态")]),v._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[v._v("dp[i] := [0..i] 中，以 nums[i] 结尾的最大子数组和\n")])])]),i("p",[v._v("状态的推导是按照 i 从 0 到 n - 1 按顺序推的，推到 dp[i]，时，dp[i - 1], ..., dp[0] 已经计算完。因为子数组是连续的，所以子问题 dp[i] 其实只与子问题 dp[i - 1] 有关。如果 [0..i-1] 上以 nums[i-1] 结尾的最大子数组和(缓存在 dp[i-1] )为非负数，则以 nums[i] 结尾的最大子数组和就在 dp[i-1] 的基础上加上 nums[i] 就是 dp[i] 的结果否则以 i 结尾的子数组就不要 i-1 及之前的数，因为选了的话子数组的和只会更小。")]),v._v(" "),i("p",[v._v("按照以上的分析，状态的转移可以写出来，如下")]),v._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[v._v("dp[i] = nums[i] + max(dp[i - 1], 0)\n")])])]),i("p",[v._v("这个是单串 dp[i] 的问题，状态的推导方向，以及推导公式如下")]),v._v(" "),i("p",[i("img",{attrs:{src:"https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2020/08/09/2-2-1.png",alt:"状态推导方向1"}})]),v._v(" "),i("p",[v._v("在本题中，f(dp[i-1], ..., dp[0]) 即为 max(dp[i-1], 0) + nums[i]，dp[i] 仅与 dp[i-1] 1 个子问题有关。因此虽然紫色部分的子问题已经计算完，但是推导当前的橙色状态时，只需要 dp[i-1] 这一个历史状态。")]),v._v(" "),i("ol",{attrs:{start:"2"}},[i("li",[v._v("依赖比 i 小的 O(n) 个子问题")])]),v._v(" "),i("blockquote",[i("ol",{attrs:{start:"30"}},[i("li",[v._v("最长上升子序列")])]),v._v(" "),i("p",[v._v("给定一个无序的整数数组，找到其中最长上升子序列的长度。")])]),v._v(" "),i("p",[v._v("输入是一个单串，首先思考单串问题中设计状态 dp[i] 时拆分子问题的方式：枚举子串或子序列的结尾元素来拆分子问题，设计状态 dp[i] := 在子数组 [0..i] 上，且选了 nums[i] 时，的最长上升子序列。")]),v._v(" "),i("p",[v._v("因为子序列需要上升，因此以 i 结尾的子序列中，nums[i] 之前的数字一定要比 nums[i] 小才行，因此目标就是先找到以此前比 nums[i] 小的各个元素，然后每个所选元素对应一个以它们结尾的最长子序列，从这些子序列中选择最长的，其长度加 1 就是当前的问题的结果。如果此前没有比 nums[i] 小的数字，则当前问题的结果就是 1 。")]),v._v(" "),i("p",[v._v("按照以上的分析，状态的转移方程可以写出来，如下")]),v._v(" "),i("p",[v._v("![](/Users/apple/Desktop/screenshot/截屏2021-11-11 下午4.57.53.png)")]),v._v(" "),i("p",[v._v("其中 0 <= j < i, nums[j] < nums[i]。")]),v._v(" "),i("p",[v._v("本题依然是单串 dp[i] 的问题，状态的推导方向，以及推导公式与上一题的图示相同，")]),v._v(" "),i("p",[v._v("状态的推导依然是按照 i 从 0 到 n-1 推的，计算 dp[i] 时，dp[i-1], dp[i-2], ..., dp[0] 依然已经计算完。")]),v._v(" "),i("p",[v._v("但本题与上一题的区别是推导 dp[i] 时，dp[i-1]. dp[i-2], ..., dp[0] 均可能需要用上，即，因此计算当前的橙色状态时，紫色部分此前计算过的状态都可能需要用上。")]),v._v(" "),i("h4",{attrs:{id:"单串相关练习题"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#单串相关练习题"}},[v._v("#")]),v._v(" 单串相关练习题")]),v._v(" "),i("ul",[i("li",[v._v("最经典单串 LIS 系列")]),v._v(" "),i("li",[v._v("最大子数组和系列")]),v._v(" "),i("li",[v._v("打家劫舍系列")]),v._v(" "),i("li",[v._v("变形：需要两个位置的情况")]),v._v(" "),i("li",[v._v("与其它算法配合")]),v._v(" "),i("li",[v._v("其它单串 dp[i] 问题")]),v._v(" "),i("li",[v._v("带维度单串 dp[i][k]")]),v._v(" "),i("li",[v._v("股票系列")])]),v._v(" "),i("h3",{attrs:{id:"双串"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#双串"}},[v._v("#")]),v._v(" 双串")]),v._v(" "),i("p",[v._v("有两个输入从串，长度分别为 m, n，此时子问题需要用 i, j 两个变量表示，分别代表第一个串和第二个串考虑的位置 dp[i][j]:=第一串考虑[0..i]，第二串考虑[0..j]时，原问题的解")]),v._v(" "),i("p",[v._v("较大规模的子问题只与常数个较小规模的子问题有关，其中较小规模可能是 i 更小，或者是 j 更小，也可以是 i，j 同时变小。\n其中一种最常见的状态转移形式：推导 dp[i][j] 时，dp[i][j] 仅与 dp[i-1][j], dp[i][j-1], dp[i-1][j-1]，例如")]),v._v(" "),i("ul",[i("li",[v._v("72 编辑距离")]),v._v(" "),i("li",[v._v("712 两个字符串的最小 ASCII 删除和")])]),v._v(" "),i("p",[v._v("线性动态规划中双串 dp[i][j] 的问题，状态的推导方向以及推导公式如下")]),v._v(" "),i("p",[i("img",{attrs:{src:"https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2020/08/06/2-2-2.png",alt:"状态推导方向2"}})]),v._v(" "),i("p",[v._v("如图所示，绿色部分的 dp[i-1 ~ 0][j-1 ~ 0] 均已经计算过，但计算橙色的当前状态时，仅用到 dp[i-1][j], dp[i][j-1], dp[i-1][j-1]，即比 i, j 小的 O(1)个子问题。")]),v._v(" "),i("p",[v._v("这种形式的线性 DP 的代码常见写法")]),v._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[v._v("for i = 1..m\n    for j = 1..n\n        dp[i][j] = f(dp[i-1][j-1], dp[i-1][j], dp[i][j-1])\n\n")])])]),i("p",[v._v("时间复杂度 O(mn)，空间复杂度 O(mn)")]),v._v(" "),i("p",[v._v("以上是 O(1) 转移的情况，即计算 dp[i][j] 时，虽然绿色部分的子问题均已经计算完，但只需要用到 dp[i-1][j], dp[i][j-1], dp[i-1][j-1]。也可能出现更高复杂度的转移，类似单串中依赖比 i 小的 O(n)) 个子问题的情况。")]),v._v(" "),i("h4",{attrs:{id:"双串-dp-i-j-经典问题"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#双串-dp-i-j-经典问题"}},[v._v("#")]),v._v(" 双串 dp[i][j] 经典问题")]),v._v(" "),i("p",[v._v("以下将涉及到的知识点对应的典型问题进行讲解，题目和解法具有代表性，可以从一个问题推广到一类问题。")]),v._v(" "),i("ol",{attrs:{start:"1143"}},[i("li",[i("blockquote",[i("ol",{attrs:{start:"1143"}},[i("li",[v._v("最长公共子序列")])]),v._v(" "),i("p",[v._v("给定两个字符串 text1 和 text2，返回这两个字符串的最长公共子序列的长度。")])])])]),v._v(" "),i("p",[v._v("输入是双串，首先思考双串问题中设计状态 dp[i][j] 时拆分子问题的方式：枚举第一串的子序列的结尾和第二串的子序列的结尾来拆分子问题，设计状态 dp[i][j] := text1 考虑 [0..i], text2 考虑 [0..j] 时，原问题的解，即 LCS 长度")]),v._v(" "),i("p",[v._v("这个是单串 dp[i][j] 的问题，状态的推导方向，以及推导公式如下")]),v._v(" "),i("p",[i("img",{attrs:{src:"https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2020/08/06/2-2-2.png",alt:"状态推导方向2"}})]),v._v(" "),i("p",[v._v("状态的推导是按照 i 从 0 到 n - 1、j 从 0 到 m - 1 顺序推的，推到 dp[i][j] 时，dp[i - 1 .. 0][j - 1 .. 0] 均已经计算完。")]),v._v(" "),i("p",[v._v("因为两个子序列需要相同，若两个串的末尾元素相同，则可以选择 text1[i] 和 text2[j]，此时再根据此前已经 text1[0..i-1] 和 text[0..j-1] 的 LCS 长度。若两个串的末尾元素不同，则 text1[i] 和 text2[j] 中只能选一个，")]),v._v(" "),i("p",[v._v("若选了 text1[i]，则 text2 只能取到 j-1，此时 dp[i-1][j] 的结果就是当前状态 dp[i][j] 的结果。\n若选了 text2[j]，则 text1 只能取到 i-1，此时 dp[i][j-1] 的结果就是当前状态 dp[i][j] 的结果。\n两个结果要取一个最长的。")]),v._v(" "),i("p",[v._v("按照以上的分析，状态的转移方程可以写出来，如下")]),v._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[v._v("dp[i][j] =\n1. dp[i-1][j-1] + 1  (text1[i] == text2[j])\n2. max(dp[i][j-1], dp[i-1][j])  (text1[i] != text2[j])\n两者取较大值\n")])])]),i("blockquote",[i("ol",{attrs:{start:"72"}},[i("li",[v._v("编辑距离\n给你两个单词 word1 和 word2，请你计算出将 word1 转换成 word2 所使用的最少操作数 。")])]),v._v(" "),i("p",[v._v("你可以对一个单词进行如下三种操作：")]),v._v(" "),i("p",[v._v("插入一个字符\n删除一个字符\n替换一个字符")])]),v._v(" "),i("p",[v._v("输入是双串，首先思考双串问题中设计状态 dp[i][j] 时拆分子问题的方式：枚举第一串的子序列的结尾和第二串的子序列的结尾来拆分子问题，设计状态 dp[i][j] := word1 考虑 [0..i], word2 考虑 [0..j] 时，原问题的解，即 word1 转换成 word2 的最少操作数")]),v._v(" "),i("p",[v._v("这个是单串 dp[i][j] 的问题，状态的推导方向，以及推导公式与上一题的图示相同")]),v._v(" "),i("p",[v._v("同样地，状态的推导是按照 i 从 0 到 n - 1、j 从 0 到 m - 1 顺序推的，推到 dp[i][j] 时，dp[i - 1 .. 0][j - 1 .. 0] 均已经计算完。")]),v._v(" "),i("p",[v._v("因为操作之后两个 word 需要相同，如果两个串的末尾元素 word1[i] 和 word2[j] 不相同，则可以在 word1 的末尾元素上使用插入，删除，替>换这三种操作，操作数都要 + 1，如果两个串的末尾元素 word1[i] 和 word2[j] 相同，依然可以在 word1 的末尾元素上使用插入，删除，替换这三种操作，但是此时如果使用改，则操作数不 +1，因为两个末尾元素已经相等了。")]),v._v(" "),i("p",[v._v("按照以上的分析，状态的转移方程可以写出来，如下")]),v._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[v._v("dp[i][j] =\n1. dp[i][j-1] + 1  (最后一步是插入)\n2. dp[i-1][j] + 1  (最后一步是删)\n3. dp[i-1][j-1] + 1  (最后一步是改，且 word1[i] != word2[j])\n4. dp[i-1][j-1]  (最后一步是改，且 word1[i] == word2[j])\n取较小值\n")])])]),i("h2",{attrs:{id:"双串相关练习题"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#双串相关练习题"}},[v._v("#")]),v._v(" 双串相关练习题")]),v._v(" "),i("ol",[i("li",[v._v("最经典双串 LCS 系列")]),v._v(" "),i("li",[v._v("字符串匹配系列")]),v._v(" "),i("li",[v._v("其它双串 dp[i][j] 问题")]),v._v(" "),i("li",[v._v("带维度双串 dp[i][j][k]")])]),v._v(" "),i("h2",{attrs:{id:"前缀和"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#前缀和"}},[v._v("#")]),v._v(" 前缀和")]),v._v(" "),i("p",[v._v("前缀和是一种查询数组中任意区间的元素的和的数据结构，这里数组给定之后就不变了。针对这个不变的数组，前缀和用于多次查询区间 [i, j] 上元素的和。")]),v._v(" "),i("p",[v._v("对于动态规划而言，前缀和的意义主要有两点：")]),v._v(" "),i("p",[v._v("一维和二维前缀和的推导，分别用到了单串和矩阵中最经典的状态设计以及状态转移；\n在一些更复杂的动态规划问题中，状态转移的时候需要依赖区间和，因为状态转移是非常频繁的操作，因此必须高效地求区间和才能使得状态转移的时间复杂度可接受，此时就必须用到前缀和了。\n除此之外，一些问题需要前缀和与其它数据结构配合来解决，也有两类：")]),v._v(" "),i("p",[v._v("先预处理出前缀和数组，这一步是动态规划，然后在前缀和数组上用其它数据结构解决；\n还是按照动态规划的方式求前缀和，也需要额外的数据结构维护前缀和，但不是预处理好前缀和数组之后再用数据结构计算，而是每求出一个前缀和，就更新一次数据结构并维护答案。\n前缀和的推导和计算隐含着动态规划的基本思想，同时它的状态设计是线性动态规划中比较简单的那一类。与线性动态规划一样，前缀和也有一维和二维两种场景。\n虽然前缀和本身很简单，但需要用到它解决的问题非常多，与其它数据结构配合的变化也很多，因此需要从线性动态规划中剥离出来单独学习。")]),v._v(" "),i("h2",{attrs:{id:"区间动态规划"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#区间动态规划"}},[v._v("#")]),v._v(" 区间动态规划")]),v._v(" "),i("p",[v._v("在输入为长度为 n 的数组时，子问题用区间 [i..j] 表示。\n状态的定义和转移都与区间有关，称为区间动态规划")]),v._v(" "),i("h3",{attrs:{id:"区间动态规划简介"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#区间动态规划简介"}},[v._v("#")]),v._v(" 区间动态规划简介")]),v._v(" "),i("p",[v._v("区间 DP 是状态的定义和转移都与区间有关，其中区间用两个端点表示。")]),v._v(" "),i("p",[v._v("状态定义 dp[i][j] = [i..j] 上原问题的解。i 变大，j 变小都可以得到更小规模的子问题。")]),v._v(" "),i("p",[v._v("对于单串上的问题，我们可以对比一下线性动态规划和区间动态规划。线性动态规划, 一般是定义 dp[i]， 表示考虑到前 i 个元素，原问题的解，i 变小即得到更小规模的子问题，推导状态时候是从前往后，即 i 从小到大推的。区间动态规划，一般是定义 dp[i][j]，表示考虑 [i..j] 范围内的元素，原问题的解增加 i，减小 j 都可以得到更小规模的子问题。推导状态一般是按照区间长度从短到长推的。")]),v._v(" "),i("p",[v._v("区间动态规划的状态设计，状态转移都与线性动态规划有明显区别，但是由于这两种方法都经常用在单串问题上，拿到一个单串的问题时，往往不能快速地判断到底是用线性动态规划还是区间动态规划，这也是区间动态规划的难点之一。")]),v._v(" "),i("p",[v._v("状态转移，推导状态 dp[i][j] 时，有两种常见情况")]),v._v(" "),i("h4",{attrs:{id:"_1-dp-i-j-仅与常数个更小规模子问题有关"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_1-dp-i-j-仅与常数个更小规模子问题有关"}},[v._v("#")]),v._v(" 1. dp[i][j] 仅与常数个更小规模子问题有关")]),v._v(" "),i("p",[v._v("一般是与 dp[i + 1][j], dp[i][j - 1], dp[i + 1][j - 1] 有关。")]),v._v(" "),i("p",[v._v("dp[i][j] = f(dp[i + 1][j], dp[i][j - 1], dp[i + 1][j - 1])")]),v._v(" "),i("p",[i("img",{attrs:{src:"https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2020/08/06/4-1-1.png",alt:"img"}})]),v._v(" "),i("p",[v._v("代码常见写法")]),v._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[v._v("for len = 1..n\n    for i = i..len\n        j = i + len - 1\n        dp[i][j] = max(dp[i][j], f(dp[i+1][j], dp[i][j-1], dp[i+1][j-1]))\n\n")])])]),i("p",[v._v("时间复杂度和空间复杂度均为 O(n^{2})"),i("em",[v._v("O")]),v._v("("),i("em",[v._v("n")]),v._v("2)")]),v._v(" "),i("p",[v._v("例如力扣第 516 题，详细过程参考下一节。")]),v._v(" "),i("h4",{attrs:{id:"_2-dp-i-j-与-o-n-个更小规模子问题有关"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_2-dp-i-j-与-o-n-个更小规模子问题有关"}},[v._v("#")]),v._v(" 2. dp[i][j] 与 O(n) 个更小规模子问题有关")]),v._v(" "),i("p",[v._v("一般是枚举 [i,j] 的分割点，将区间分为 [i,k] 和 [k+1,j]，对每个 k 分别求解（下面公式的 f），再汇总（下面公式的 g）。")]),v._v(" "),i("p",[v._v("dp[i][j] = g(f(dp[i][k], dp[k + 1][j])) 其中 k = i .. j-1。")]),v._v(" "),i("p",[i("img",{attrs:{src:"https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2020/08/06/4-1-2.png",alt:"img"}})]),v._v(" "),i("p",[v._v("代码常见写法, 以下代码以 f 为 max 为例")]),v._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[v._v("for len = 1..n\n    for i = i..len\n        j = i + len - 1\n        for k = i..j\n            dp[i][j] = max(dp[i][j], f(dp[i][k], dp[k][j]))\n")])])]),i("p",[v._v("时间复杂度可以达到 O(n^3)，空间复杂度还是 O(n^2)")]),v._v(" "),i("p",[v._v("例如力扣第 664 题，详细过程参考下一节")]),v._v(" "),i("h4",{attrs:{id:"总结"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[v._v("#")]),v._v(" 总结")]),v._v(" "),i("p",[v._v("区间动态规划一般用在单串问题上，以区间 [i, j] 为单位思考状态的设计和转移。它与线性动态规划在状态设计和状态转移上都有明显的不同，但由于这两个方法都经常用在单串问题上，导致我们拿到一个单串的问题时，经常不能快速反映出应该用哪种方法。这是区间动态规划的难点之一，但是这个难点也是好解决的，就是做一定数量的练习题，因为区间动态规划的题目比线性动态规划少很多，并且区间动态规划的状态设计和转移都比较朴素，变化也比线性动态规划少很多，所以通过不多的题目数量就可以把区间动态规划常见的方法和变化看个大概了。")]),v._v(" "),i("p",[v._v("后续节介绍区间动态规划的几个典型例题，学习区间动态规划问题常见的模式。\n并且配有力扣上出现的区间动态规划的练习题，加深理解。")]),v._v(" "),i("h3",{attrs:{id:"区间动态规划经典问题"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#区间动态规划经典问题"}},[v._v("#")]),v._v(" 区间动态规划经典问题")]),v._v(" "),i("h4",{attrs:{id:"大规模问题与常数个小规模问题有关"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#大规模问题与常数个小规模问题有关"}},[v._v("#")]),v._v(" 大规模问题与常数个小规模问题有关")]),v._v(" "),i("p",[v._v("最常见的形式如下：")]),v._v(" "),i("p",[v._v("推导 dp[i][j] 时，需要用到 dp[i][j-1], dp[i+1][j], dp[i+1][j-1] 三个子问题")]),v._v(" "),i("blockquote",[i("p",[v._v("最长回文子序列\n此问题在力扣上也有，是 516 题。\n考虑一个字符串 s 的所有子序列, 这些子序列中最长的回文子序列长度是多少")])]),v._v(" "),i("p",[v._v("这个问题如果用线性动态规划的经典思路，状态如下：\ndp[i] := 考虑 [0..i] , 原文题的答案\n但是此后我们就遇到了困难，会发现这个状态有些难以转移")]),v._v(" "),i("p",[v._v("而如果考虑区间动态规划，状态如下：\ndp[i][j] := 区间 [i..j] 上, 原问题的答案\n转移的时候，考虑 dp[i][j-1], dp[i+1][j], dp[i+1][j-1] 这三个子问题，这是考虑把边界去掉的模式，回文的特点恰好时候这种模式，\n根据两个边界的元素关系可以得到转移方程如下：")]),v._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[v._v("dp\\[i][j] = dp\\[i + 1][j - 1] + 2;                if(s[i] == s[j])\ndp\\[i][j] = max(dp\\[i + 1][j], dp\\[i][j - 1]);     if(s[i] != s[j])\n")])])]),i("p",[v._v("回文是用区间动态规划解决的常见问题，有很多变种，下一节中列出的练习题有很多类似的。")]),v._v(" "),i("h4",{attrs:{id:"大规模问题与-o-n-个小规模问题有关"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#大规模问题与-o-n-个小规模问题有关"}},[v._v("#")]),v._v(" 大规模问题与 O(n) 个小规模问题有关")]),v._v(" "),i("p",[v._v("推导 dp[i][j] 时，需要 [i..j] 的所有子区间信息，其中子区间的其中一个端点与原区间重合，共 O(n)O(n) 个子区间")]),v._v(" "),i("p",[v._v("最常见的形式\ndp[i][j] = g(f(dp[i][k], dp[k][j])) 其中 k = i+1 .. j-1。")]),v._v(" "),i("p",[v._v("其中 g 常见的有 max/min，例如 664 就是 min")]),v._v(" "),i("p",[v._v("下面就以 664 题讲解这种模式的思考方式")]),v._v(" "),i("p",[v._v("奇怪的打印机\n有台奇怪的打印机有以下两个特殊要求：")]),v._v(" "),i("p",[v._v("打印机每次只能打印同一个字符序列。\n每次可以在任意起始和结束位置打印新字符，并且会覆盖掉原来已有的字符。\n给定一个只包含小写英文字母的字符串 s，你的任务是计算这个打印机打印它需要的最少次数。")]),v._v(" "),i("p",[v._v("首先区间动态规划的状态定义与前面一样，还是经典的定义方式，状态定义模式化这也是区间动态规划的一个特点。")]),v._v(" "),i("p",[v._v("dp[i][j] := 打印出 [i..j] 上的字符需要的最少次数\n在转移时，枚举中间的切分位置 k，考虑 i 边界以及中间枚举的切分位置 k 转移时的情况")]),v._v(" "),i("p",[v._v("i 要自己涂一次，则 dp[i][j] = 1 + dp[i + 1][j]\n其中第一项 1 表示 i 位置单独花费一次次数\ni 与中间的某个切分位置 k 一起打印 (条件是 s[i] = s[k])，则 dp[i][j] = dp[i+1][k] + dp[k+1][j]\n其中第一项 dp[i+1][k] 表示 i 位置跟着 k 一起转移了，不在单独考虑 i 花费的次数了\n综合以上分析可以写出状态转移方程如下")]),v._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[v._v("dp\\[i][j] = dp\\[i + 1][j] + 1;\ndp\\[i][j] = min(dp\\[i][j], dp\\[i + 1][k] + dp\\[k + 1][j]); 其中 i < k <= j 且 s[i] == s[k]\n")])])]),i("h4",{attrs:{id:"总结-2"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#总结-2"}},[v._v("#")]),v._v(" 总结")]),v._v(" "),i("p",[v._v("本小节通过两个例题介绍了区间动态规划的状态转移的两种模式。这两种模式基本上就涵盖了大部分区间动态规划问题，后续节整理了力扣上出现的区间动态规划问题，通过这些题的练习，区间动态规划就可以掌握的差不多了。")]),v._v(" "),i("h3",{attrs:{id:"回文相关问题"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#回文相关问题"}},[v._v("#")]),v._v(" 回文相关问题")]),v._v(" "),i("p",[v._v("以下六道题是力扣上利用区间动态规划解决的与回文相关的问题。")]),v._v(" "),i("ul",[i("li",[v._v("最长回文子串")]),v._v(" "),i("li",[v._v("回文子串")]),v._v(" "),i("li",[v._v("最长回文子序列")]),v._v(" "),i("li",[v._v("段式回文")]),v._v(" "),i("li",[v._v("统计不同回文子字符串")]),v._v(" "),i("li",[v._v("让字符串成为回文串的最少插入次数 —— 最长回文子序列")])])])}),[],!1,null,null,null);_.default=a.exports}}]);