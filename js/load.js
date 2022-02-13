var ���� = [
  "https://space.bilibili.com/672328094",
  "https://www.bilibili.com/video/BV1FZ4y1F7HH",
  "https://www.bilibili.com/video/BV1FX4y1g7u8",
  "https://www.bilibili.com/video/BV1aK4y1P7Cg",
  "https://www.bilibili.com/video/BV17A411V7Uh",
  "https://www.bilibili.com/video/BV1JV411b7Pc",
  "https://www.bilibili.com/video/BV1AV411v7er",
  "https://www.bilibili.com/video/BV1564y1173Q",

  "https://www.bilibili.com/video/BV1MX4y1N75X",
  "https://www.bilibili.com/video/BV17h411U71w",
  "https://www.bilibili.com/video/BV1ry4y1Y71t",
  "https://www.bilibili.com/video/BV1Sy4y1n7c4",
  "https://www.bilibili.com/video/BV15y4y177uk",
  "https://www.bilibili.com/video/BV1PN411X7QW",
  "https://www.bilibili.com/video/BV1Dp4y1H7iB",
  "https://www.bilibili.com/video/BV1bi4y1P7Eh",
  "https://www.bilibili.com/video/BV1vQ4y1Z7C2",
  "https://www.bilibili.com/video/BV1oU4y1h7Sc",
]

const initConfig = {
  mode: "fixed",
  hidden: true,
  content: {
    link: ����[Math.floor(Math.random() * ����.length)],
    welcome: ["Hi!"],
    touch: "",
    skin: ["�����뿴��������Ա��", "�滻���볡�ı�"],
    custom: [
      { "selector": ".comment-form", "text": "Content Tooltip" },
      { "selector": ".home-social a:last-child", "text": "Blog Tooltip" },
      { "selector": ".list .postname", "type": "read" },
      { "selector": ".post-content a, .page-content a, .post a", "type": "link" }
    ],
  },
  night: "toggleNightMode()",
  model: [
    "https://cdn.jsdelivr.net/gh/journey-ad/blog-img/live2d/Diana/Diana.model3.json",
    "https://cdn.jsdelivr.net/gh/journey-ad/blog-img/live2d/Ava/Ava.model3.json",
  ],
  tips: true,
  onModelLoad: onModelLoad
}

function ����ʥ����Ȼ() {
  pio_reference = new Paul_Pio(initConfig)

  pio_alignment = "left"

  // Then apply style
  pio_refresh_style()
}

function onModelLoad(model) {
  const container = document.getElementById("pio-container")
  const canvas = document.getElementById("pio")
  const modelNmae = model.internalModel.settings.name
  const coreModel = model.internalModel.coreModel
  const motionManager = model.internalModel.motionManager

  let touchList = [
    {
      text: "���չʾ�ı�1",
      motion: "Idle"
    },
    {
      text: "���չʾ�ı�2",
      motion: "Idle"
    }
  ]

  function playAction(action) {
    action.text && pio_reference.modules.render(action.text)
    action.motion && pio_reference.model.motion(action.motion)

    if (action.from && action.to) {
      Object.keys(action.from).forEach(id => {
        const hidePartIndex = coreModel._partIds.indexOf(id)
        TweenLite.to(coreModel._partOpacities, 0.6, { [hidePartIndex]: action.from[id] });
        // coreModel._partOpacities[hidePartIndex] = action.from[id]
      })

      motionManager.once("motionFinish", (data) => {
        Object.keys(action.to).forEach(id => {
          const hidePartIndex = coreModel._partIds.indexOf(id)
          TweenLite.to(coreModel._partOpacities, 0.6, { [hidePartIndex]: action.to[id] });
          // coreModel._partOpacities[hidePartIndex] = action.to[id]
        })
      })
    }
  }

  canvas.onclick = function () {
    if (motionManager.state.currentGroup !== "Idle") return

    const action = pio_reference.modules.rand(touchList)
    playAction(action)
  }

  if (modelNmae === "Diana") {
    container.dataset.model = "Diana"
    initConfig.content.skin[1] = ["���ǳԻ����� ��Ȼ Diana~"]
    playAction({ motion: "Tap������-����" })

    touchList = [
      {
        text: "������ƨ��û��",
        motion: "Tap���� -���"
      },
      {
        text: "���˼��ˣ����Ҳ�˵��˭~",
        motion: "Tap= =  �������"
      },
      {
        text: "����...������....",
        motion: "Tap�� -�۽�"
      },
      {
        text: "��ȻȻ��û��ѽ~",
        motion: "Tap����-�м�����"
      },
      {
        text: "���ݺ���ѽ~",
        motion: "Tap������-����"
      },
      {
        text: "��Ҫ�ٴ�����������",
        motion: "Tapҡͷ- ����"
      },
      {
        text: "���~~~",
        motion: "Tap����-����"
      },
      {
        text: "zzZ������",
        motion: "Leave"
      },
      {
        text: "�ۣ��óԵģ�",
        motion: "Tap��ͷ��"
      },
    ]

  } else if (modelNmae === "Ava") {
    container.dataset.model = "Ava"
    initConfig.content.skin[1] = ["����<s>����</s>Gamer���� ���� AvA~"]
    playAction({
      motion: "Tap����",
      from: {
        "Part15": 1
      },
      to: {
        "Part15": 0
      }
    })

    touchList = [
      {
        text: "ˮĸ ˮĸ~ ֻ����ͨ������",
        motion: "Tap����"
      },
      {
        text: "�ɰ��ĸ��Ӹ���~��ϲ����~",
        motion: "Tap�ؿ�����",
        from: {
          "Part12": 1
        },
        to: {
          "Part12": 0
        }
      },
      {
        text: "��...���ֵ�֮��ϲ����������",
        motion: "Tap�м�����",
        from: {
          "Part12": 1
        },
        to: {
          "Part12": 0
        }
      },
      {
        text: "����������ô������",
        motion: "Tap����",
        from: {
          "Part16": 1
        },
        to: {
          "Part16": 0
        }
      },
      {
        text: "����ô�����ң��ҵ������ǲ��ǿ�������",
        motion: "Tap��"
      },
      {
        text: "AAAAAAAAAAvvvvAAA ������",
        motion: "Tap����",
        from: {
          "Part15": 1
        },
        to: {
          "Part15": 0
        }
      }
    ]
    canvas.width = model.width * 1.2
    const hideParts = [
      "Part5", // ��
      "neko", // ����ȭ
      "game", // ������Ϸ�ֱ�
      "Part15", // ī��
      "Part21", // ����С��
      "Part22", // ���ִ���
      "Part", // ˫�ֱ�ȭ
      "Part16", // ������Ч
      "Part12" // С����
    ]
    const hidePartsIndex = hideParts.map(id => coreModel._partIds.indexOf(id))
    hidePartsIndex.forEach(idx => {
      coreModel._partOpacities[idx] = 0
    })
  }
}


var pio_reference
window.onload = ����ʥ����Ȼ