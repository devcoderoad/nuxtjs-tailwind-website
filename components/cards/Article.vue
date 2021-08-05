<template>
  <div v-if="items && items.length > 0" class="lg:container mx-auto">
    <div class="boxed-bottom">
      <div
        v-for="(item, index) in items"
        :key="item.slug"
        class="boxed-bottom__right"
      >
        <div class="boxed-bottom-content" :rel="`card-${index}`">
          <h4 class="headline text-muted">
            <Nuxt-Link
              :to="
                localePath({
                  name: 'article-slug',
                  params: { slug: item.slug }
                })
              "
              >{{ item.title }}</Nuxt-Link
            >
          </h4>
          <div class="flex flex-row mb-2 my-2 text-sm text-gray-500">
            <!-- {{ item.tags && item.tags.length && item.tags.map(tag=><font-awesome-icon :icon="['fas', 'user']" />) }} -->
            <div class="flex-1">
              <font-awesome-icon :icon="['fa', 'clock']" />
              {{ $dateFns.format(item.createdAt, 'MMMM dd, yyyy') }}
              <!-- <span>
                <font-awesome-icon :icon="['fa', 'tags']" />
              </span>
              <span v-for="(tag, i) in item.tags" :key="i" class="capitalize">
                {{ tag
                }}{{
                  item.tags.length !== 1 && item.tags.length !== i + 1
                    ? ','
                    : ''
                }}
              </span> -->
            </div>
            <div class="flex-1">
              <span class="float-right text-muted">
                <font-awesome-icon :icon="['fa', 'user']" />
                {{ item.author.name }}
              </span>
            </div>
          </div>
          <Nuxt-Link
            :to="
              localePath({
                name: 'article-slug',
                params: { slug: item.slug }
              })
            "
          >
            <img
              :src="item.img"
              :alt="item.title"
              class="
                rounded-xl
                img-fluid
                box-shadow-img
                mb-3
                w-full
                object-cover
                h-44
              "
            />
          </Nuxt-Link>
          <p class="text-justify my-3 text-sm">
            {{ item.description.slice(0, 90) }}...
          </p>
          <div class="text-sm text-gray-500 mt-2 mb-4">
            <span>
              <font-awesome-icon :icon="['fa', 'tags']" />
            </span>
            <span v-for="(tag, i) in item.tags" :key="i" class="capitalize">
              <Nuxt-Link
                :to="
                  localePath({
                    name: 'article-tag',
                    params: { slug: tag }
                  })
                "
              >
                {{ tag }}</Nuxt-Link
              >{{
                item.tags.length !== 1 && item.tags.length !== i + 1 ? ',' : ''
              }}
            </span>
          </div>
          <Nuxt-Link
            :to="
              localePath({
                name: 'article-slug',
                params: { slug: item.slug }
              })
            "
            class="
              btn btn-sm btn-default btn-hidden
              text-muted
              border border-gray-400
              rounded-full
            "
            ><span>read more</span>&nbsp;<font-awesome-icon
              :icon="['fa', 'arrow-right']"
            />
          </Nuxt-Link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { fas } from '@fortawesome/free-solid-svg-icons'

export default {
  props: {
    items: { type: Array, required: true, default: () => [] }
  },
  computed: {
    fas() {
      return fas
    }
  }
}
</script>
