# LCCandJLF

这个是网站测试

photos.json
[
  {
    "filename": "1.jpg",
    "desc": "我是普通照片，默认居中剪裁",
    "layout": "wide"
  },
  {
    "filename": "2.jpg",
    "desc": "这是一张竖图，我想显示它的最上面（头部）",
    "position": "top"
  },
  {
    "filename": "3.jpg",
    "desc": "我想显示这张图的底部",
    "position": "bottom"
  },
  {
    "filename": "4.jpg",
    "desc": "我想对齐右上角",
    "layout": "large",
    "position": "right top"
  },
  {
    "filename": "5.jpg",
    "desc": "高级玩法：我想把焦点对准水平 80%，垂直 20% 的地方",
    "position": "80% 20%"
  }
]

models.json
[
    {
      "src": "...",
      "name": "疯转的机器人",
      "speed": "200deg" 
    },
    {
      "src": "...",
      "name": "淡定的宇航员",
      "speed": "5deg"
    },
    {
        "src": "https://modelviewer.dev/shared-assets/models/Astronaut.glb",
        "name": "太空宇航员",
        "desc": "Google 提供的示例模型"
    },
    {
        "src": "models/robot.glb",
        "name": "我的机器人",
        "desc": "这是我自己做的第一个 Blender 模型"
    },
    {
        "src": "https://modelviewer.dev/shared-assets/models/NeilArmstrong.glb",
        "name": "尼尔·阿姆斯特朗",
        "desc": "登月第一人"
    }
]

tutorials.json
[
  {
    "title": "C 语言指针完全图解",
    "desc": "一篇非常详细的指针教程，解决了困扰我很久的内存地址问题。",
    "link": "https://blog.csdn.net/你的收藏链接",
    "tag": "C语言",
    "icon": "💻"
    "image": "assets/images/resource_preview.jpg"//可选
  },
  {
    "title": "ESP32 开发环境搭建 (VSCode + PlatformIO)",
    "desc": "从零开始搭建嵌入式开发环境，包含驱动安装和点灯测试。",
    "link": "https://github.com/你的仓库/esp32-setup",
    "tag": "嵌入式",
    "icon": "⚡"
  },
  {
    "title": "我的 GitHub 仓库",
    "desc": "存放我所有练手项目代码的地方，欢迎 Star。",
    "link": "https://github.com/你的用户名",
    "tag": "资源",
    "icon": "🐙"
  },
  {
    "title": "Blender 3D 建模入门",
    "desc": "我是如何制作那个风扇刀模型的？看这个视频就够了。",
    "link": "https://www.bilibili.com/video/BV...",
    "tag": "3D建模",
    "icon": "🧊"
  }
]