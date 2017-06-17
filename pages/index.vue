<template>
  <div class="container">
    <div>
      <h1>Barlow</h1>
    </div>
    <div class="styles">
      <ul>
        <li v-for="weight in weights">
          <a @click="updateWeight(weight.name)">{{ weight.name }}</a> <template v-if="weight.name === selectedWeight">*</template>
        </li>
      </ul>
      <ul>
        <li v-for="width in widths">
          <a @click="updateWidth(width)">{{ width }}</a> <template v-if="width === selectedWidth">*</template>
        </li>
      </ul>
      <ul>
        <li v-for="style in styles">
          <a @click="updateStyle(style)">{{ style }}</a> <template v-if="style === selectedStyle">*</template>
        </li>
      </ul>
      <ul>
        <li v-for="caseKind in cases">
          <a @click="updateCase(caseKind)">{{ caseKind }}</a><template v-if="caseKind === selectedCase">*</template>
        </li>
      </ul>
    </div>
    <div class="examples">
      <div v-for="pair in pairs">
        <div class="size">{{ pair[0] }}px/{{ pair[1] }}px</div>
        <p :style="{ fontStyle: selectedStyle, fontSize: pair[0] + 'px', lineHeight: pair[1] + 'px', fontFamily: 'Barlow-' + selectedWeight }">There's a time when the operation of the machine becomes so odious, makes you so sick at heart, that you can't take part! You can't even passively take part! And you've got to put your bodies upon the gears and upon the wheels, upon the levers, upon all the apparatus, and you've got to make it stop! And you've got to indicate to the people who run it, to the people who own it, that unless you're free, the machine will be prevented from working at all!</p>
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
      selectedCase: 'Sentence case',
      weights: [
        {
          name: 'Thin',
          css: 100
        },
        {
          name: 'UltraLight',
          css: 200
        },
        {
          name: 'Light',
          css: 300
        },
        {
          name: 'Regular',
          css: 400
        },
        {
          name: 'Medium',
          css: 500
        },
        {
          name: 'DemiBold',
          css: 600
        },
        {
          name: 'Bold',
          css: 700
        },
        {
          name: 'ExtraBold',
          css: 800
        },
        {
          name: 'Black',
          css: 900
        }
      ],
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
        'Sentence case',
        'Title Case'
      ],
      pairs: [
        [12, 20],
        [14, 22],
        [16, 26],
        [18, 30],
        [24, 40],
        [36, 52],
        [48, 64],
        [54, 72]
      ]
    }
  },
  methods: {
    styled: function (weight) {
      return {
        fontWeight: weight.css, fontFamily: 'Barlow-' + weight.name
      }
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
    }
  }
}
</script>
<style>
.size {
  margin-top: 35px;
  font-size: 14px;
  color: #a9a9a9;
  margin-bottom: 7px;
}
.container {
  padding: 2em 4em;
}

h1 {
  font-size: 128px;
  letter-spacing:-3px;
  font-weight: 900;
  font-family: 'Barlow-Black';
  margin-left: -8px;
  margin-bottom: 30px;
}

.width {
  font-size: 1em;
}

.styles {
  float: left;
  overflow: scroll;
  width: 210px;
}
.styles > ul > li {
  font-feature-settings: "kern" on, "liga" on, "calt" on, "smcp"; 
  -moz-font-feature-settings: "kern" on, "liga" on, "calt" on, "smcp"; 
  -webkit-font-feature-settings: "kern" on, "liga" on, "calt" on, "smcp"; 
  -ms-font-feature-settings: "kern" on, "liga" on, "calt" on, "smcp"; 
  -o-font-feature-settings: "kern" on, "liga" on, "calt" on, "smcp";
  text-transform: lowercase;
  font-family: 'Barlow-Regular';
  letter-spacing: 0.07em;
  font-weight: 500;
  font-size: 16px;
  line-height: 28px;
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
@font-face {
  font-family: 'Barlow-Black';
  src: url('~assets/fonts/Barlow-Black.woff');
}
@font-face {
  font-family: 'Barlow-BlackCondensed';
  src: url('~assets/fonts/Barlow-BlackCondensed.woff');
}
@font-face {
  font-family: 'Barlow-BlackCondensedOblique';
  src: url('~assets/fonts/Barlow-BlackCondensedOblique.woff');
}
@font-face {
  font-family: 'Barlow-BlackOblique';
  src: url('~assets/fonts/Barlow-BlackOblique.woff');
}
@font-face {
  font-family: 'Barlow-BlackSemiCondensed';
  src: url('~assets/fonts/Barlow-BlackSemiCondensed.woff');
}
@font-face {
  font-family: 'Barlow-BlackSemiCondensedOblique';
  src: url('~assets/fonts/Barlow-BlackSemiCondensedOblique.woff');
}
@font-face {
  font-family: 'Barlow-Bold';
  src: url('~assets/fonts/Barlow-Bold.woff');
}
@font-face {
  font-family: 'Barlow-BoldCondensed';
  src: url('~assets/fonts/Barlow-BoldCondensed.woff');
}
@font-face {
  font-family: 'Barlow-BoldCondensedOblique';
  src: url('~assets/fonts/Barlow-BoldCondensedOblique.woff');
}
@font-face {
  font-family: 'Barlow-BoldOblique';
  src: url('~assets/fonts/Barlow-BoldOblique.woff');
}
@font-face {
  font-family: 'Barlow-BoldSemiCondensed';
  src: url('~assets/fonts/Barlow-BoldSemiCondensed.woff');
}
@font-face {
  font-family: 'Barlow-BoldSemiCondensedOblique';
  src: url('~assets/fonts/Barlow-BoldSemiCondensedOblique.woff');
}
@font-face {
  font-family: 'Barlow-DemiBold';
  src: url('~assets/fonts/Barlow-DemiBold.woff');
}
@font-face {
  font-family: 'Barlow-DemiBoldCondensed';
  src: url('~assets/fonts/Barlow-DemiBoldCondensed.woff');
}
@font-face {
  font-family: 'Barlow-DemiBoldCondensedOblique';
  src: url('~assets/fonts/Barlow-DemiBoldCondensedOblique.woff');
}
@font-face {
  font-family: 'Barlow-DemiBoldOblique';
  src: url('~assets/fonts/Barlow-DemiBoldOblique.woff');
}
@font-face {
  font-family: 'Barlow-DemiBoldSemiCondensed';
  src: url('~assets/fonts/Barlow-DemiBoldSemiCondensed.woff');
}
@font-face {
  font-family: 'Barlow-DemiBoldSemiCondensedOblique';
  src: url('~assets/fonts/Barlow-DemiBoldSemiCondensedOblique.woff');
}
@font-face {
  font-family: 'Barlow-ExtraBold';
  src: url('~assets/fonts/Barlow-ExtraBold.woff');
}
@font-face {
  font-family: 'Barlow-ExtraBoldCondensed';
  src: url('~assets/fonts/Barlow-ExtraBoldCondensed.woff');
}
@font-face {
  font-family: 'Barlow-ExtraBoldCondensedOblique';
  src: url('~assets/fonts/Barlow-ExtraBoldCondensedOblique.woff');
}
@font-face {
  font-family: 'Barlow-ExtraBoldOblique';
  src: url('~assets/fonts/Barlow-ExtraBoldOblique.woff');
}
@font-face {
  font-family: 'Barlow-ExtraBoldSemiCondensed';
  src: url('~assets/fonts/Barlow-ExtraBoldSemiCondensed.woff');
}
@font-face {
  font-family: 'Barlow-ExtraBoldSemiCondensedOblique';
  src: url('~assets/fonts/Barlow-ExtraBoldSemiCondensedOblique.woff');
}
@font-face {
  font-family: 'Barlow-Light';
  src: url('~assets/fonts/Barlow-Light.woff');
}
@font-face {
  font-family: 'Barlow-LightCondensed';
  src: url('~assets/fonts/Barlow-LightCondensed.woff');
}
@font-face {
  font-family: 'Barlow-LightCondensedOblique';
  src: url('~assets/fonts/Barlow-LightCondensedOblique.woff');
}
@font-face {
  font-family: 'Barlow-LightOblique';
  src: url('~assets/fonts/Barlow-LightOblique.woff');
}
@font-face {
  font-family: 'Barlow-LightSemiCondensed';
  src: url('~assets/fonts/Barlow-LightSemiCondensed.woff');
}
@font-face {
  font-family: 'Barlow-LightSemiCondensedOblique';
  src: url('~assets/fonts/Barlow-LightSemiCondensedOblique.woff');
}
@font-face {
  font-family: 'Barlow-Medium';
  src: url('~assets/fonts/Barlow-Medium.woff');
}
@font-face {
  font-family: 'Barlow-MediumCondensed';
  src: url('~assets/fonts/Barlow-MediumCondensed.woff');
}
@font-face {
  font-family: 'Barlow-MediumCondensedOblique';
  src: url('~assets/fonts/Barlow-MediumCondensedOblique.woff');
}
@font-face {
  font-family: 'Barlow-MediumOblique';
  src: url('~assets/fonts/Barlow-MediumOblique.woff');
}
@font-face {
  font-family: 'Barlow-MediumSemiCondensed';
  src: url('~assets/fonts/Barlow-MediumSemiCondensed.woff');
}
@font-face {
  font-family: 'Barlow-MediumSemiCondensedOblique';
  src: url('~assets/fonts/Barlow-MediumSemiCondensedOblique.woff');
}
@font-face {
  font-family: 'Barlow-Regular';
  src: url('~assets/fonts/Barlow-Regular.woff');
}
@font-face {
  font-family: 'Barlow-RegularCondensed';
  src: url('~assets/fonts/Barlow-RegularCondensed.woff');
}
@font-face {
  font-family: 'Barlow-RegularCondensedOblique';
  src: url('~assets/fonts/Barlow-RegularCondensedOblique.woff');
}
@font-face {
  font-family: 'Barlow-RegularOblique';
  src: url('~assets/fonts/Barlow-RegularOblique.woff');
}
@font-face {
  font-family: 'Barlow-RegularSemiCondensed';
  src: url('~assets/fonts/Barlow-RegularSemiCondensed.woff');
}
@font-face {
  font-family: 'Barlow-RegularSemiCondensedOblique';
  src: url('~assets/fonts/Barlow-RegularSemiCondensedOblique.woff');
}
@font-face {
  font-family: 'Barlow-Thin';
  src: url('~assets/fonts/Barlow-Thin.woff');
}
@font-face {
  font-family: 'Barlow-ThinCondensed';
  src: url('~assets/fonts/Barlow-ThinCondensed.woff');
}
@font-face {
  font-family: 'Barlow-ThinCondensedOblique';
  src: url('~assets/fonts/Barlow-ThinCondensedOblique.woff');
}
@font-face {
  font-family: 'Barlow-ThinOblique';
  src: url('~assets/fonts/Barlow-ThinOblique.woff');
}
@font-face {
  font-family: 'Barlow-ThinSemiCondensed';
  src: url('~assets/fonts/Barlow-ThinSemiCondensed.woff');
}
@font-face {
  font-family: 'Barlow-ThinSemiCondensedOblique';
  src: url('~assets/fonts/Barlow-ThinSemiCondensedOblique.woff');
}
@font-face {
  font-family: 'Barlow-UltraLight';
  src: url('~assets/fonts/Barlow-UltraLight.woff');
}
@font-face {
  font-family: 'Barlow-UltraLightCondensed';
  src: url('~assets/fonts/Barlow-UltraLightCondensed.woff');
}
@font-face {
  font-family: 'Barlow-UltraLightCondensedOblique';
  src: url('~assets/fonts/Barlow-UltraLightCondensedOblique.woff');
}
@font-face {
  font-family: 'Barlow-UltraLightOblique';
  src: url('~assets/fonts/Barlow-UltraLightOblique.woff');
}
@font-face {
  font-family: 'Barlow-UltraLightSemiCondensed';
  src: url('~assets/fonts/Barlow-UltraLightSemiCondensed.woff');
}
@font-face {
  font-family: 'Barlow-UltraLightSemiCondensedOblique';
  src: url('~assets/fonts/Barlow-UltraLightSemiCondensedOblique.woff');
}
</style>
