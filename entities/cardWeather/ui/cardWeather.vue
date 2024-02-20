<script lang="ts" setup>
import { IconHumidity, IconWindSpeed } from '@shared/icon'
import Typography from '@shared/typography'

interface Props {
  data: {
    date: string
    desc: string
    temp: number
    icon: string
    units?: [
      {
        type: string
        title: string
        value: number
      }
    ]
  }
}

const { data } = defineProps<Props>()
</script>

<template>
  <article class="card-weather">
    <Typography tag="h3" mods="title,l" class="card-weather__date">{{
      data?.date
    }}</Typography>
    <Typography tag="span" mods="xs" class="card-weather__desc">{{
      data?.desc
    }}</Typography>
    <div
      class="card-weather__temp-wrapper"
      :style="`--icon: url('http://openweathermap.org/img/wn/${data?.icon}@2x.png')`"
    >
      <Typography tag="span" mods="title,xxl" class="card-weather__temp">{{
        data?.temp
      }}</Typography>
    </div>
    <ul v-if="data?.units" class="card-weather__units">
      <li
        v-for="unit in data.units"
        class="card-weather__unit"
        :title="unit.title"
      >
        <IconWindSpeed
          v-if="unit.type === 'wind'"
          size="24"
          color="var(--color-text)"
        />
        <IconHumidity
          v-if="unit.type === 'humidity'"
          size="24"
          color="var(--color-text)"
        />
        <Typography tag="span" mods="500, xs">{{ unit.value }}</Typography>
      </li>
    </ul>
  </article>
</template>

<style lang="scss" scoped>
@layer block {
  .card-weather {
    background-color: cl(bg);
    border-radius: var(--radius-s);
    padding: var(--gap-s);

    &__date {
      margin-bottom: var(--gap-xs);
    }

    &__desc {
      display: block;
      margin-bottom: var(--gap-s);
    }

    &__temp-wrapper {
      display: flex;
      align-items: flex-start;
      gap: var(--gap-xxs);
      margin-bottom: var(--gap-xs);

      &::after {
        transform: translate(-7px, -11px);
        content: '';
        display: block;
        background-image: var(--icon);
        width: 40px;
        aspect-ratio: 1;
        background-size: contain;
        filter: drop-shadow(0px 1px 2px rgba(#{cl(blck--rgb)}, 0.2));
      }
    }

    &__temp {
      color: cl(alt);

      &::after {
        @include font(32px, 1, 800);

        content: '°';
        display: inline-block;
        transform: translateY(-5px);
      }
    }

    &__units {
      @include reset-list();
      display: flex;
      align-items: center;
      gap: var(--gap-xs);
    }

    &__unit {
      @include center();
      gap: var(--gap-xxs);
    }
  }
}
</style>
