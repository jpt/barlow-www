<template>
  <div class="container">
    <div class="preload">
      <template v-for="font in allStyles">
        <span :style="{ fontFamily: font }">&zwnj;</span>
      </template>
    </div>
    <div>
<!--       <h1 :style="{ fontFamily: selectedFontFamily, fontWeight: fontWeightCSS(selectedWeight) }">Barlow</h1> -->
    </div>
    <div class="styles">
      <ul>
        <li v-for="weight in weights">
          <a @click="updateWeight(weight.name)">{{ weight.name }} </a><template v-if="weight.name === selectedWeight">*</template>
        </li>
      </ul>
      <ul>
        <li v-for="width in widths">
          <a @click="updateWidth(width)">{{ width }} </a><template v-if="width === selectedWidth">*</template>
          <template v-if="selectedWidth === '' && width === 'Regular'">*</template>
        </li>
      </ul>
      <ul>
        <li v-for="style in styles">
          <a @click="updateStyle(style)">{{ style }} </a><template v-if="style === selectedStyle">*</template>
          <template v-if="selectedStyle === '' && style === 'Roman'">*</template>
        </li>
      </ul>
      <ul>
        <li v-for="caseKind in cases">
          <a @click="updateCase(caseKind)">{{ caseKind }} </a><template v-if="caseKind === selectedCase">*</template>
        </li>
      </ul>
    </div>
    <div class="examples">
      <div v-for="pair in pairs">
        <div class="size">{{ pair[0] }}px / {{ pair[1] }}px</div>
        <p contenteditable spellcheck="false" @input="updateText" :style="{ fontStyle: selectedStyle, fontSize: pair[0] + 'px', lineHeight: pair[1] + 'px', fontFamily: selectedFontFamily, textTransform: caseCSS }">{{ bodyText }}</p>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  data () {
    return {
      selectedStyle: 'Roman',
      selectedWidth: 'Regular',
      selectedWeight: 'Regular',
      selectedCase: 'Default',
      bodyText: 'There\'s a time when the operation of the machine becomes so odious, makes you so sick at heart, that you can\'t take part! You can\'t even passively take part! And you\'ve got to put your bodies upon the gears and upon the wheels, upon the levers, upon all the apparatus, and you\'ve got to make it stop! And you\'ve got to indicate to the people who run it, to the people who own it, that unless you\'re free, the machine will be prevented from working at all!',
      weights: {
        'Thin': {
          name: 'Thin',
          css: 100
        },
        'UltraLight': {
          name: 'UltraLight',
          css: 200
        },
        'Light': {
          name: 'Light',
          css: 300
        },
        'Regular': {
          name: 'Regular',
          css: 400
        },
        'Medium': {
          name: 'Medium',
          css: 500
        },
        'DemiBold': {
          name: 'DemiBold',
          css: 600
        },
        'Bold': {
          name: 'Bold',
          css: 700
        },
        'ExtraBold': {
          name: 'ExtraBold',
          css: 800
        },
        'Black': {
          name: 'Black',
          css: 900
        }
      },
      widths: [
        'Regular',
        'SemiCondensed',
        'Condensed'
      ],
      styles: [
        'Roman',
        'Oblique'
      ],
      cases: [
        'Uppercase',
        'Lowercase',
        'Default',
        'Title Case'
      ],
      pairs: [
        [54, 84],
        [48, 82],
        [36, 58],
        [30, 52],
        [24, 42],
        [18, 30],
        [16, 27],
        [14, 24],
        [12, 20]
      ]
    }
  },
  methods: {
    updateText (e) {
      this.bodyText = e.target.innerText
    },
    updateWeight: function (weight) {
      this.selectedWeight = weight
    },
    updateWidth: function (width) {
      this.selectedWidth = width
    },
    updateCase: function (caseKind) {
      this.selectedCase = caseKind
    },
    updateStyle: function (style) {
      this.selectedStyle = style
    },
    fontWeightCSS: function (fontWeight) {
      return this.weights[fontWeight].css
    },
    fontName: function (weight, width, style) {
      if (width === 'Regular') {
        width = ''
      }
      if (style === 'Roman') {
        style = ''
      }
      return 'Barlow-' + weight + width + style
    }
  },
  computed: {
    selectedFontFamily: function () {
      if (this.selectedWidth === 'Regular') {
        this.selectedWidth = ''
      }
      if (this.selectedStyle === 'Roman') {
        this.selectedStyle = ''
      }
      return 'Barlow-' + this.selectedWeight + this.selectedWidth + this.selectedStyle
    },
    caseCSS: function () {
      switch (this.selectedCase) {
        case 'Default':
          return ''
        case 'Uppercase':
          return 'uppercase'
        case 'Lowercase':
          return 'lowercase'
        case 'Title Case':
          return 'capitalize'
      }
    },
    allStyles: function () {
      let fonts = []
      for (let weight = 0; weight < Object.keys(this.weights).length; weight++) {
        for (let width = 0; width < this.widths.length; width++) {
          for (let style = 0; style < this.styles.length; style++) {
            let wi = this.widths[width]
            if (wi === 'Regular') {
              wi = ''
            }
            let st = this.styles[style]
            if (st === 'Roman') {
              st = ''
            }
            let font = ['Barlow-', Object.keys(this.weights)[weight], wi, st].join('') // join because regular concatenation will force the string 'undefined'
            fonts.push(font)
          }
        }
      }
      return fonts
    }
  }
}
</script>

<style lang="scss">

@import "~assets/fonts/fonts.css";

.preload {
  position: absolute;
  opacity: 0;
  // top: 0;
  // left: 0;
  // z-index: -1;
}
.size {
  margin-top: 35px;
  font-size: 12px;
  color: #a9a9a9;
  margin-bottom: 7px;
}
.container {
  // padding: 2em 4em;
}
.container,.styles {
  overflow: scroll !important;
}
.examples {
  margin-left: 208px;
  width: 720px;
}
h1 {
  font-size: 128px;
  font-weight: 900;
  // font-family: 'Barlow-Black';
  margin-left: 200px;
  margin-bottom: 30px;
}

.width {
  font-size: 1em;
}

.styles {
  float: left;
  overflow: scroll;
  width: 160px;
  position: fixed;
  top: 30px;
  left: 40px;
  height: 100%;
}
.styles > ul > li {
  font-feature-settings: "smcp"; 
  text-transform: lowercase;
  font-family: 'Barlow-Regular';
  letter-spacing: 0.07em;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;

  &:hover {
    cursor: pointer;
  }

}
p {
  margin-bottom: 2em;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
}
ul {
  list-style-type: none;
  margin-bottom: 2em;
  margin-right: 2em;
}
li {
  font-size: 1em;
  line-height: 1.35em;
  font-weight: 400;
}
.styles ul > ul:first-of-type {
  margin-right: 4em;
}
.thin {
  font-weight: 100;
}

.examples p:focus {
    outline: none;
}
</style>
