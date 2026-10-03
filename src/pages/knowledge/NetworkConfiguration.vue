<template>
  <main class="relative min-h-screen overflow-hidden bg-zinc-950 text-white">
    <!-- Background -->
    <div class="pointer-events-none absolute inset-0">
      <div
        class="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-red-500/20 blur-[150px]"
      />

      <div
        class="absolute bottom-[20%] right-0 h-[500px] w-[500px] rounded-full bg-red-700/10 blur-[120px]"
      />

      <div class="grid-pattern absolute inset-0 opacity-40" />
    </div>

    <!-- Navbar -->
    <nav
      class="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-8"
    >
      <RouterLink to="/" class="flex items-center gap-3">
        <div
          class="h-8 w-8 rounded-full bg-gradient-to-br from-red-300 via-red-500 to-red-900"
        />

        <div>
          <p class="font-semibold tracking-wide">
            lugasalhawariy
          </p>

          <p class="text-xs text-zinc-500">
            Network Configuration
          </p>
        </div>
      </RouterLink>

      <div class="hidden gap-8 text-sm text-zinc-400 md:flex">
        <a href="#dasar" class="transition hover:text-white">
          Dasar
        </a>

        <a href="#perangkat" class="transition hover:text-white">
          Perangkat
        </a>

        <a href="#ip" class="transition hover:text-white">
          IP Address
        </a>

        <a href="#routing" class="transition hover:text-white">
          Routing
        </a>

        <a href="#protokol" class="transition hover:text-white">
          Protokol
        </a>
      </div>
    </nav>

    <!-- Hero -->
    <section class="relative px-6 pb-20 pt-16">
      <div class="mx-auto max-w-7xl">
        <div class="max-w-4xl">
          <div
            class="mb-6 inline-flex items-center rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-sm text-red-300"
          >
            🌐 Network Configuration
          </div>

          <h1 class="text-5xl font-black leading-tight md:text-7xl">
            Memahami
            <span
              class="bg-gradient-to-r from-red-300 via-red-500 to-red-700 bg-clip-text text-transparent"
            >
              Network Configuration
            </span>
          </h1>

          <p
            class="mt-8 max-w-3xl text-lg leading-relaxed text-zinc-400 md:text-xl"
          >
            Pelajari bagaimana perangkat komputer saling terhubung,
            bagaimana data berpindah antarjaringan, serta bagaimana
            Router, Switch, IP Address, Gateway, NAT, Firewall, DNS,
            DHCP, ARP, dan berbagai protokol jaringan bekerja.
          </p>

          <div class="mt-10 flex flex-wrap gap-3">
            <span
              v-for="tag in tags"
              :key="tag"
              class="rounded-full border border-zinc-800 bg-zinc-900 px-4 py-2 text-sm text-zinc-300"
            >
              {{ tag }}
            </span>
          </div>
        </div>

        <!-- Network Visualization -->
        <div
          class="relative mt-20 overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/60 p-6 backdrop-blur md:p-10"
        >
          <div
            class="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/10 blur-3xl"
          />

          <div class="relative grid items-center gap-6 md:grid-cols-7">
            <NetworkNode
              title="Internet"
              address="Global Network"
              icon="🌐"
            />

            <div class="hidden text-center text-2xl text-red-500 md:block">
              →
            </div>

            <NetworkNode
              title="Router"
              address="Gateway / NAT"
              icon="📡"
            />

            <div class="hidden text-center text-2xl text-red-500 md:block">
              →
            </div>

            <NetworkNode
              title="Switch"
              address="LAN"
              icon="🔀"
            />

            <div class="hidden text-center text-2xl text-red-500 md:block">
              →
            </div>

            <NetworkNode
              title="Client"
              address="192.168.1.10"
              icon="💻"
            />
          </div>

          <div class="relative mt-8 text-center">
            <p class="text-sm text-zinc-500">
              Contoh sederhana jaringan lokal yang terhubung ke Internet
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Table of Contents -->
    <section class="relative mx-auto max-w-7xl px-6 py-16">
      <div
        class="rounded-3xl border border-zinc-800 bg-zinc-900/50 p-8 md:p-10"
      >
        <p class="text-sm font-medium text-red-400">
          Materi
        </p>

        <h2 class="mt-2 text-3xl font-bold">
          Apa yang akan dipelajari?
        </h2>

        <p class="mt-4 max-w-3xl leading-relaxed text-zinc-500">
          Materi berikut disusun dari konsep dasar hingga mekanisme
          komunikasi jaringan. Materi ini mencakup konsep yang diperlukan
          untuk memahami 30 soal Network Configuration.
        </p>

        <div class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <a
            v-for="(item, index) in sections"
            :key="item.id"
            :href="`#${item.id}`"
            class="group rounded-2xl border border-zinc-800 bg-zinc-950/70 p-5 transition hover:-translate-y-1 hover:border-red-500/40"
          >
            <span class="text-sm text-red-400">
              {{ String(index + 1).padStart(2, "0") }}
            </span>

            <h3
              class="mt-3 font-semibold transition group-hover:text-red-400"
            >
              {{ item.title }}
            </h3>

            <p class="mt-2 text-sm leading-relaxed text-zinc-500">
              {{ item.description }}
            </p>
          </a>
        </div>
      </div>
    </section>

    <!-- ====================================================== -->
    <!-- 01 DASAR JARINGAN -->
    <!-- ====================================================== -->

    <section
      id="dasar"
      class="relative mx-auto max-w-7xl scroll-mt-20 px-6 py-20"
    >
      <SectionHeader
        number="01"
        eyebrow="Network Fundamental"
        title="Dasar Jaringan Komputer"
        description="Memahami jaringan komputer merupakan langkah pertama sebelum mempelajari konfigurasi perangkat jaringan."
      />

      <div class="mt-12 grid gap-6 lg:grid-cols-2">
        <InfoCard
          title="Apa itu jaringan komputer?"
          icon="🔗"
        >
          <p>
            Jaringan komputer adalah sekumpulan perangkat yang saling
            terhubung untuk melakukan komunikasi dan bertukar data.
          </p>

          <p>
            Perangkat tersebut dapat berupa komputer, laptop, smartphone,
            printer, server, kamera, access point, maupun perangkat IoT.
          </p>

          <p>
            Hubungan antarperangkat dapat menggunakan kabel maupun
            teknologi wireless seperti Wi-Fi.
          </p>
        </InfoCard>

        <InfoCard
          title="Apa itu Internet?"
          icon="🌐"
        >
          <p>
            Internet adalah jaringan yang menghubungkan berbagai jaringan
            komputer di seluruh dunia.
          </p>

          <p>
            Jadi, Internet bukan satu komputer atau satu jaringan tunggal.
            Internet merupakan kumpulan banyak jaringan yang saling
            terhubung.
          </p>

          <p>
            Router berperan penting dalam meneruskan paket dari satu
            jaringan menuju jaringan lainnya.
          </p>
        </InfoCard>
      </div>

      <div class="mt-8 grid gap-6 md:grid-cols-3">
        <StatCard
          value="LAN"
          title="Local Area Network"
          description="Jaringan dalam area terbatas seperti rumah, sekolah, kantor, atau laboratorium."
        />

        <StatCard
          value="WAN"
          title="Wide Area Network"
          description="Jaringan dengan cakupan wilayah yang lebih luas dan dapat menghubungkan berbagai LAN."
        />

        <StatCard
          value="Internet"
          title="Global Network"
          description="Kumpulan jaringan yang saling terhubung secara global."
        />
      </div>

      <ConceptBox title="Konsep penting">
        <div class="grid gap-4 md:grid-cols-3">
          <BulletItem text="LAN menghubungkan perangkat dalam area lokal." />

          <BulletItem text="Router menghubungkan jaringan yang berbeda." />

          <BulletItem text="Internet menghubungkan berbagai jaringan di seluruh dunia." />
        </div>
      </ConceptBox>
    </section>

    <!-- ====================================================== -->
    <!-- 02 PERANGKAT -->
    <!-- ====================================================== -->

    <section
      id="perangkat"
      class="relative mx-auto max-w-7xl scroll-mt-20 px-6 py-20"
    >
      <SectionHeader
        number="02"
        eyebrow="Network Devices"
        title="Perangkat Jaringan"
        description="Perangkat jaringan memiliki fungsi yang berbeda. Memahami fungsi masing-masing perangkat membantu kita memahami bagaimana sebuah jaringan dibangun."
      />

      <div class="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <DeviceCard
          title="Router"
          icon="📡"
          description="Menghubungkan jaringan yang berbeda dan meneruskan paket berdasarkan informasi jaringan seperti IP Address."
          points="Menghubungkan LAN dan Internet;Menentukan jalur paket;Default Gateway;Dapat melakukan NAT"
        />

        <DeviceCard
          title="Switch"
          icon="🔀"
          description="Menghubungkan beberapa perangkat dalam satu LAN dan meneruskan Ethernet Frame berdasarkan MAC Address."
          points="LAN;MAC Address;Ethernet Frame;Menghubungkan banyak client"
        />

        <DeviceCard
          title="Access Point"
          icon="📶"
          description="Menyediakan koneksi jaringan wireless sehingga perangkat dapat terhubung melalui Wi-Fi."
          points="Wi-Fi;Wireless LAN;SSID;Wireless Client"
        />

        <DeviceCard
          title="Hub"
          icon="🔌"
          description="Perangkat jaringan sederhana yang meneruskan sinyal ke semua port tanpa menentukan tujuan frame secara spesifik."
          points="Layer 1;Broadcast;Teknologi lama;Tidak menggunakan MAC table"
        />

        <DeviceCard
          title="Repeater"
          icon="📡"
          description="Menerima dan mengirim ulang sinyal agar jangkauan komunikasi dapat diperluas."
          points="Memperluas jangkauan;Relay sinyal;Tidak melakukan routing"
        />

        <DeviceCard
          title="Modem"
          icon="📱"
          description="Perangkat yang menyediakan koneksi ke layanan ISP menggunakan teknologi akses tertentu."
          points="ISP;Internet Access;Modulasi;Demodulasi"
        />
      </div>

      <!-- Router vs Switch -->
      <ConceptBox title="Router vs Switch">
        <div class="overflow-x-auto">
          <table class="w-full min-w-[700px] text-left">
            <thead>
              <tr class="border-b border-zinc-800">
                <th class="px-4 py-4 text-zinc-300">
                  Perangkat
                </th>

                <th class="px-4 py-4 text-zinc-300">
                  Menggunakan
                </th>

                <th class="px-4 py-4 text-zinc-300">
                  Lingkup
                </th>

                <th class="px-4 py-4 text-zinc-300">
                  Fungsi
                </th>
              </tr>
            </thead>

            <tbody>
              <tr class="border-b border-zinc-900">
                <td class="px-4 py-4 font-semibold text-red-400">
                  Router
                </td>

                <td class="px-4 py-4 text-zinc-400">
                  IP Address
                </td>

                <td class="px-4 py-4 text-zinc-400">
                  Antarjaringan
                </td>

                <td class="px-4 py-4 text-zinc-400">
                  Meneruskan paket antarjaringan
                </td>
              </tr>

              <tr class="border-b border-zinc-900">
                <td class="px-4 py-4 font-semibold text-red-400">
                  Switch
                </td>

                <td class="px-4 py-4 text-zinc-400">
                  MAC Address
                </td>

                <td class="px-4 py-4 text-zinc-400">
                  LAN
                </td>

                <td class="px-4 py-4 text-zinc-400">
                  Meneruskan frame dalam LAN
                </td>
              </tr>

              <tr>
                <td class="px-4 py-4 font-semibold text-red-400">
                  Hub
                </td>

                <td class="px-4 py-4 text-zinc-400">
                  Sinyal
                </td>

                <td class="px-4 py-4 text-zinc-400">
                  LAN
                </td>

                <td class="px-4 py-4 text-zinc-400">
                  Meneruskan ke semua port
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </ConceptBox>
    </section>

    <!-- ====================================================== -->
    <!-- 03 IP ADDRESS -->
    <!-- ====================================================== -->

    <section
      id="ip"
      class="relative mx-auto max-w-7xl scroll-mt-20 px-6 py-20"
    >
      <SectionHeader
        number="03"
        eyebrow="Network Addressing"
        title="IP Address & IPv4"
        description="IP Address digunakan sebagai alamat logis untuk mengidentifikasi interface perangkat dalam jaringan."
      />

      <div class="mt-12 grid gap-6 lg:grid-cols-2">
        <InfoCard
          title="Apa itu IP Address?"
          icon="🏷️"
        >
          <p>
            IP Address adalah alamat logis yang digunakan untuk
            mengidentifikasi perangkat atau interface jaringan.
          </p>

          <p>
            IP Address membantu jaringan mengetahui sumber dan tujuan
            komunikasi.
          </p>

          <p>
            Contoh alamat IPv4:
          </p>

          <CodeBox>
            192.168.1.10
          </CodeBox>
        </InfoCard>

        <InfoCard
          title="IPv4"
          icon="4️⃣"
        >
          <p>
            IPv4 menggunakan alamat berukuran
            <strong class="text-white">32-bit</strong>.
          </p>

          <p>
            Alamat tersebut biasanya ditulis dalam empat bagian yang
            dipisahkan oleh tanda titik.
          </p>

          <CodeBox>
            192 . 168 . 1 . 10
          </CodeBox>

          <p>
            Setiap bagian disebut octet dan memiliki ukuran 8 bit.
          </p>
        </InfoCard>
      </div>

      <!-- IPv4 Structure -->
      <div
        class="mt-8 rounded-3xl border border-zinc-800 bg-zinc-900/50 p-8"
      >
        <h3 class="text-2xl font-bold">
          Struktur IPv4
        </h3>

        <div class="mt-8 grid gap-3 md:grid-cols-4">
          <div
            v-for="(part, index) in ipv4Parts"
            :key="part"
            class="rounded-2xl border border-zinc-800 bg-zinc-950 p-5 text-center"
          >
            <p class="text-xs text-zinc-600">
              Octet {{ index + 1 }}
            </p>

            <p class="mt-2 font-mono text-2xl font-bold text-red-400">
              {{ part }}
            </p>

            <p class="mt-2 text-xs text-zinc-500">
              8 bit
            </p>
          </div>
        </div>

        <p class="mt-6 leading-relaxed text-zinc-400">
          Karena setiap octet memiliki 8 bit, nilai setiap octet berada
          pada rentang <strong class="text-white">0–255</strong>.
        </p>
      </div>

      <!-- Subnet Mask -->
      <div
        class="mt-8 rounded-3xl border border-zinc-800 bg-zinc-900/50 p-8"
      >
        <div class="grid gap-8 lg:grid-cols-2">
          <div>
            <p class="text-sm text-red-400">
              Subnetting
            </p>

            <h3 class="mt-2 text-3xl font-bold">
              Subnet Mask
            </h3>

            <p class="mt-4 leading-relaxed text-zinc-400">
              Subnet Mask digunakan untuk menentukan bagian IP Address
              yang menunjukkan network dan bagian yang menunjukkan host.
            </p>

            <CodeBox>
              IP: 192.168.1.10
              <br />
              Mask: 255.255.255.0
            </CodeBox>
          </div>

          <div class="grid gap-4 sm:grid-cols-2">
            <StatCard
              value="Network"
              title="Bagian jaringan"
              description="Menentukan jaringan tempat sebuah perangkat berada."
            />

            <StatCard
              value="Host"
              title="Bagian perangkat"
              description="Menentukan perangkat atau interface di dalam jaringan."
            />
          </div>
        </div>
      </div>

      <!-- Private IP -->
      <div
        class="mt-8 rounded-3xl border border-red-500/20 bg-red-500/5 p-8"
      >
        <div class="flex items-start gap-4">
          <div class="text-3xl">
            🔒
          </div>

          <div class="w-full">
            <h3 class="text-2xl font-bold">
              Private IP Address
            </h3>

            <p class="mt-3 leading-relaxed text-zinc-400">
              Private IP digunakan di dalam jaringan lokal dan tidak
              digunakan secara langsung sebagai alamat tujuan di Internet
              publik.
            </p>

            <div class="mt-6 grid gap-3 sm:grid-cols-3">
              <div
                v-for="range in privateRanges"
                :key="range"
                class="rounded-xl border border-zinc-800 bg-zinc-950 p-4 text-center font-mono text-sm text-zinc-300"
              >
                {{ range }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Public vs Private -->
      <ConceptBox title="Private IP vs Public IP">
        <div class="grid gap-4 md:grid-cols-2">
          <div
            class="rounded-2xl border border-zinc-800 bg-zinc-950 p-6"
          >
            <p class="text-red-400">
              Private IP
            </p>

            <ul class="mt-4 space-y-3 text-sm text-zinc-400">
              <li>→ Digunakan dalam jaringan lokal</li>
              <li>→ Contoh: 192.168.1.10</li>
              <li>→ Tidak digunakan sebagai alamat publik Internet</li>
              <li>→ Umumnya membutuhkan NAT untuk akses Internet</li>
            </ul>
          </div>

          <div
            class="rounded-2xl border border-zinc-800 bg-zinc-950 p-6"
          >
            <p class="text-red-400">
              Public IP
            </p>

            <ul class="mt-4 space-y-3 text-sm text-zinc-400">
              <li>→ Digunakan pada jaringan publik</li>
              <li>→ Dapat digunakan untuk komunikasi melalui Internet</li>
              <li>→ Dialokasikan oleh ISP atau pihak terkait</li>
              <li>→ Harus unik dalam konteks Internet</li>
            </ul>
          </div>
        </div>
      </ConceptBox>
    </section>

    <!-- ====================================================== -->
    <!-- 04 MAC & ARP -->
    <!-- ====================================================== -->

    <section
      id="mac"
      class="relative mx-auto max-w-7xl scroll-mt-20 px-6 py-20"
    >
      <SectionHeader
        number="04"
        eyebrow="Link Layer"
        title="MAC Address & ARP"
        description="IP Address digunakan untuk addressing secara logis, sedangkan MAC Address digunakan pada komunikasi jaringan lokal."
      />

      <div class="mt-12 grid gap-6 lg:grid-cols-3">
        <InfoCard
          title="MAC Address"
          icon="🪪"
        >
          <p>
            MAC Address adalah alamat yang digunakan untuk
            mengidentifikasi interface jaringan pada level link.
          </p>

          <CodeBox>
            00:1A:2B:3C:4D:5E
          </CodeBox>
        </InfoCard>

        <InfoCard
          title="ARP"
          icon="🔍"
        >
          <p>
            ARP atau Address Resolution Protocol digunakan untuk
            menemukan MAC Address berdasarkan IP Address pada jaringan
            lokal.
          </p>

          <CodeBox>
            IP → MAC
          </CodeBox>
        </InfoCard>

        <InfoCard
          title="Ethernet Frame"
          icon="📦"
        >
          <p>
            Pada jaringan Ethernet, frame membawa informasi seperti
            source MAC dan destination MAC.
          </p>

          <CodeBox>
            Source MAC
            <br />
            ↓
            <br />
            Destination MAC
          </CodeBox>
        </InfoCard>
      </div>

      <!-- IP vs MAC -->
      <ConceptBox title="IP Address vs MAC Address">
        <div class="overflow-x-auto">
          <table class="w-full min-w-[650px] text-left">
            <thead>
              <tr class="border-b border-zinc-800">
                <th class="px-4 py-4">
                  IP Address
                </th>

                <th class="px-4 py-4">
                  MAC Address
                </th>
              </tr>
            </thead>

            <tbody>
              <tr class="border-b border-zinc-900">
                <td class="px-4 py-4 text-zinc-400">
                  Alamat logis
                </td>

                <td class="px-4 py-4 text-zinc-400">
                  Alamat interface jaringan
                </td>
              </tr>

              <tr class="border-b border-zinc-900">
                <td class="px-4 py-4 font-mono text-red-400">
                  192.168.1.10
                </td>

                <td class="px-4 py-4 font-mono text-red-400">
                  AA:BB:CC:DD:EE:FF
                </td>
              </tr>

              <tr>
                <td class="px-4 py-4 text-zinc-400">
                  Digunakan untuk routing
                </td>

                <td class="px-4 py-4 text-zinc-400">
                  Digunakan pada komunikasi link/LAN
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </ConceptBox>

      <!-- ARP Flow -->
      <div
        class="mt-8 rounded-3xl border border-zinc-800 bg-zinc-900/50 p-8"
      >
        <h3 class="text-2xl font-bold">
          Cara kerja sederhana ARP
        </h3>

        <div class="mt-8 grid gap-4 md:grid-cols-5">
          <NetworkNode
            title="PC A"
            address="192.168.1.10"
            icon="💻"
          />

          <div class="hidden items-center justify-center text-red-500 md:flex">
            →
          </div>

          <NetworkNode
            title="ARP"
            address="Siapa 192.168.1.20?"
            icon="🔎"
          />

          <div class="hidden items-center justify-center text-red-500 md:flex">
            →
          </div>

          <NetworkNode
            title="PC B"
            address="MAC ditemukan"
            icon="💻"
          />
        </div>
      </div>
    </section>

    <!-- ====================================================== -->
    <!-- 05 ROUTING -->
    <!-- ====================================================== -->

    <section
      id="routing"
      class="relative mx-auto max-w-7xl scroll-mt-20 px-6 py-20"
    >
      <SectionHeader
        number="05"
        eyebrow="Routing"
        title="Router, Routing & Default Gateway"
        description="Router menjadi penghubung ketika paket harus berpindah dari satu jaringan menuju jaringan lainnya."
      />

      <div class="mt-12 grid gap-6 lg:grid-cols-2">
        <InfoCard
          title="Router"
          icon="📡"
        >
          <p>
            Router adalah perangkat jaringan yang menghubungkan dua atau
            lebih jaringan dan meneruskan paket berdasarkan informasi
            routing.
          </p>

          <p>
            Salah satu fungsi router adalah menentukan ke mana paket
            harus diteruskan ketika tujuan berada pada jaringan lain.
          </p>
        </InfoCard>

        <InfoCard
          title="Default Gateway"
          icon="🚪"
        >
          <p>
            Default Gateway adalah alamat perangkat yang digunakan oleh
            host ketika ingin mengirim paket menuju jaringan lain.
          </p>

          <CodeBox>
            PC
            <br />
            192.168.1.10
            <br />
            ↓
            <br />
            Gateway
            <br />
            192.168.1.1
          </CodeBox>
        </InfoCard>
      </div>

      <!-- Routing Flow -->
      <div
        class="mt-8 rounded-3xl border border-zinc-800 bg-zinc-900/50 p-8 md:p-10"
      >
        <h3 class="text-2xl font-bold">
          Contoh perjalanan paket
        </h3>

        <div class="mt-10 grid gap-4 md:grid-cols-5">
          <NetworkNode
            title="PC"
            address="192.168.1.10"
            icon="💻"
          />

          <div class="hidden items-center justify-center text-2xl text-red-500 md:flex">
            →
          </div>

          <NetworkNode
            title="Gateway"
            address="192.168.1.1"
            icon="🚪"
          />

          <div class="hidden items-center justify-center text-2xl text-red-500 md:flex">
            →
          </div>

          <NetworkNode
            title="Internet"
            address="Remote Network"
            icon="🌐"
          />
        </div>

        <p class="mt-8 text-center leading-relaxed text-zinc-500">
          Jika tujuan berada di jaringan lain, host akan menggunakan
          Default Gateway untuk mengirim paket keluar dari jaringan lokal.
        </p>
      </div>

      <!-- Routing decision -->
      <ConceptBox title="Bagaimana host menentukan apakah memakai Gateway?">
        <div class="grid gap-4 md:grid-cols-2">
          <div
            class="rounded-2xl border border-zinc-800 bg-zinc-950 p-6"
          >
            <p class="font-semibold text-red-400">
              Tujuan satu jaringan
            </p>

            <p class="mt-3 text-sm leading-relaxed text-zinc-500">
              Jika tujuan masih berada pada jaringan lokal yang sama,
              komunikasi dapat dilakukan langsung melalui jaringan lokal.
            </p>
          </div>

          <div
            class="rounded-2xl border border-zinc-800 bg-zinc-950 p-6"
          >
            <p class="font-semibold text-red-400">
              Tujuan jaringan lain
            </p>

            <p class="mt-3 text-sm leading-relaxed text-zinc-500">
              Jika tujuan berada di jaringan berbeda, paket dikirim
              menuju Default Gateway.
            </p>
          </div>
        </div>
      </ConceptBox>
    </section>

    <!-- ====================================================== -->
    <!-- 06 NAT -->
    <!-- ====================================================== -->

    <section
      id="nat"
      class="relative mx-auto max-w-7xl scroll-mt-20 px-6 py-20"
    >
      <SectionHeader
        number="06"
        eyebrow="Network Address Translation"
        title="NAT & Akses Internet"
        description="NAT memungkinkan alamat private digunakan oleh perangkat lokal ketika berkomunikasi melalui jaringan publik."
      />

      <div class="mt-12 grid gap-6 lg:grid-cols-2">
        <InfoCard
          title="Apa itu NAT?"
          icon="🔄"
        >
          <p>
            NAT atau Network Address Translation adalah mekanisme yang
            melakukan translasi alamat jaringan antara sisi private dan
            sisi public.
          </p>

          <p>
            Dalam jaringan rumah, banyak perangkat dapat menggunakan
            private IP tetapi berbagi satu atau beberapa public IP untuk
            akses Internet.
          </p>
        </InfoCard>

        <InfoCard
          title="Mengapa NAT digunakan?"
          icon="💡"
        >
          <p>
            Salah satu manfaat penting NAT adalah membantu menghemat
            penggunaan alamat IPv4 publik.
          </p>

          <p>
            NAT juga memungkinkan banyak perangkat pada jaringan lokal
            menggunakan alamat private.
          </p>
        </InfoCard>
      </div>

      <!-- NAT Flow -->
      <div
        class="mt-8 overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/50 p-8 md:p-10"
      >
        <h3 class="text-2xl font-bold">
          Contoh alur NAT
        </h3>

        <div class="mt-10 grid gap-4 md:grid-cols-5">
          <NetworkNode
            title="PC"
            address="192.168.1.10"
            icon="💻"
          />

          <div class="hidden items-center justify-center text-2xl text-red-500 md:flex">
            →
          </div>

          <NetworkNode
            title="Router"
            address="NAT"
            icon="📡"
          />

          <div class="hidden items-center justify-center text-2xl text-red-500 md:flex">
            →
          </div>

          <NetworkNode
            title="Internet"
            address="Public IP"
            icon="🌐"
          />
        </div>

        <div
          class="mt-10 rounded-2xl border border-red-500/20 bg-red-500/5 p-6 text-center"
        >
          <p class="font-mono text-sm text-zinc-400">
            Private IP
            <span class="mx-2 text-red-500">→</span>
            NAT
            <span class="mx-2 text-red-500">→</span>
            Public IP
          </p>
        </div>
      </div>

      <!-- NAT Example -->
      <ConceptBox title="Contoh sederhana jaringan rumah">
        <div class="grid gap-3 md:grid-cols-4">
          <NetworkNode
            title="Laptop"
            address="192.168.1.10"
            icon="💻"
          />

          <NetworkNode
            title="HP"
            address="192.168.1.11"
            icon="📱"
          />

          <NetworkNode
            title="Printer"
            address="192.168.1.20"
            icon="🖨️"
          />

          <NetworkNode
            title="Router"
            address="NAT"
            icon="📡"
          />
        </div>

        <p class="mt-6 text-center text-sm text-zinc-500">
          Perangkat lokal dapat menggunakan private IP yang berbeda
          sementara router menangani koneksi menuju jaringan publik.
        </p>
      </ConceptBox>
    </section>

    <!-- ====================================================== -->
    <!-- 07 FIREWALL -->
    <!-- ====================================================== -->

    <section
      id="firewall"
      class="relative mx-auto max-w-7xl scroll-mt-20 px-6 py-20"
    >
      <SectionHeader
        number="07"
        eyebrow="Network Security"
        title="Firewall"
        description="Firewall mengontrol lalu lintas jaringan berdasarkan aturan yang telah ditentukan."
      />

      <div
        class="mt-12 rounded-3xl border border-zinc-800 bg-zinc-900/50 p-8 md:p-10"
      >
        <div class="grid items-center gap-8 lg:grid-cols-3">
          <div class="text-center">
            <div
              class="mx-auto flex h-24 w-24 items-center justify-center rounded-3xl border border-zinc-700 bg-zinc-950 text-4xl"
            >
              🌐
            </div>

            <h3 class="mt-4 font-bold">
              Network Traffic
            </h3>

            <p class="mt-2 text-sm text-zinc-600">
              Incoming / Outgoing
            </p>
          </div>

          <div
            class="rounded-3xl border border-red-500/30 bg-red-500/5 p-8 text-center"
          >
            <div class="text-5xl">
              🛡️
            </div>

            <h3 class="mt-4 text-2xl font-bold">
              Firewall
            </h3>

            <p class="mt-3 text-sm leading-relaxed text-zinc-500">
              Memeriksa traffic berdasarkan aturan keamanan.
            </p>
          </div>

          <div class="text-center">
            <div
              class="mx-auto flex h-24 w-24 items-center justify-center rounded-3xl border border-zinc-700 bg-zinc-950 text-4xl"
            >
              🖥️
            </div>

            <h3 class="mt-4 font-bold">
              Internal Network
            </h3>

            <p class="mt-2 text-sm text-zinc-600">
              Protected Network
            </p>
          </div>
        </div>

        <div class="mt-10 grid gap-4 md:grid-cols-2">
          <div
            v-for="rule in firewallRules"
            :key="rule.title"
            class="rounded-2xl border border-zinc-800 bg-zinc-950 p-5"
          >
            <p class="font-semibold text-red-400">
              {{ rule.title }}
            </p>

            <p class="mt-2 text-sm leading-relaxed text-zinc-500">
              {{ rule.description }}
            </p>
          </div>
        </div>
      </div>

      <ConceptBox title="Inti fungsi Firewall">
        <p class="leading-relaxed text-zinc-400">
          Firewall tidak sekadar berarti "antivirus". Firewall berfokus
          pada pengendalian lalu lintas jaringan berdasarkan aturan,
          misalnya berdasarkan alamat IP, port, protokol, arah koneksi,
          maupun karakteristik traffic tertentu tergantung jenis
          firewall.
        </p>
      </ConceptBox>
    </section>

    <!-- ====================================================== -->
    <!-- 08 DHCP -->
    <!-- ====================================================== -->

    <section
      id="dhcp"
      class="relative mx-auto max-w-7xl scroll-mt-20 px-6 py-20"
    >
      <SectionHeader
        number="08"
        eyebrow="Automatic Configuration"
        title="DHCP"
        description="DHCP membantu perangkat mendapatkan konfigurasi jaringan secara otomatis."
      />

      <div class="mt-12 grid gap-6 lg:grid-cols-2">
        <InfoCard
          title="Apa itu DHCP?"
          icon="⚙️"
        >
          <p>
            DHCP atau Dynamic Host Configuration Protocol adalah protokol
            yang digunakan untuk memberikan konfigurasi jaringan secara
            otomatis kepada client.
          </p>

          <p>
            Dengan DHCP, administrator tidak harus memasukkan IP Address
            secara manual ke setiap perangkat.
          </p>
        </InfoCard>

        <InfoCard
          title="Informasi yang dapat diberikan"
          icon="📋"
        >
          <div class="space-y-3">
            <div
              v-for="item in dhcpItems"
              :key="item"
              class="flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-950 p-4"
            >
              <span class="text-red-400">
                ✓
              </span>

              <span class="text-zinc-300">
                {{ item }}
              </span>
            </div>
          </div>
        </InfoCard>
      </div>

      <!-- DORA -->
      <div
        class="mt-8 rounded-3xl border border-zinc-800 bg-zinc-900/50 p-8"
      >
        <p class="text-sm text-red-400">
          DHCP Process
        </p>

        <h3 class="mt-2 text-3xl font-bold">
          DORA
        </h3>

        <p class="mt-4 max-w-3xl leading-relaxed text-zinc-500">
          Proses DHCP secara umum sering dijelaskan menggunakan empat
          tahap utama: Discover, Offer, Request, dan Acknowledge.
        </p>

        <div class="mt-10 grid gap-4 md:grid-cols-4">
          <StepCard
            number="01"
            title="Discover"
            description="Client mencari DHCP Server."
          />

          <StepCard
            number="02"
            title="Offer"
            description="Server menawarkan konfigurasi IP."
          />

          <StepCard
            number="03"
            title="Request"
            description="Client meminta konfigurasi yang ditawarkan."
          />

          <StepCard
            number="04"
            title="Acknowledge"
            description="Server mengonfirmasi konfigurasi."
          />
        </div>
      </div>

      <ConceptBox title="Contoh hasil konfigurasi DHCP">
        <CodeBox>
          IP Address      : 192.168.1.10
          <br />
          Subnet Mask     : 255.255.255.0
          <br />
          Default Gateway : 192.168.1.1
          <br />
          DNS Server      : DNS Resolver
        </CodeBox>
      </ConceptBox>
    </section>

    <!-- ====================================================== -->
    <!-- 09 DNS -->
    <!-- ====================================================== -->

    <section
      id="dns"
      class="relative mx-auto max-w-7xl scroll-mt-20 px-6 py-20"
    >
      <SectionHeader
        number="09"
        eyebrow="Name Resolution"
        title="DNS — Domain Name System"
        description="DNS menerjemahkan nama domain yang mudah dibaca manusia menjadi alamat IP yang digunakan dalam komunikasi jaringan."
      />

      <div class="mt-12 grid gap-6 lg:grid-cols-2">
        <InfoCard
          title="Apa itu DNS?"
          icon="🔎"
        >
          <p>
            DNS atau Domain Name System adalah sistem yang digunakan untuk
            melakukan resolusi nama domain menjadi alamat IP.
          </p>

          <p>
            Manusia lebih mudah mengingat:
          </p>

          <CodeBox>
            example.com
          </CodeBox>

          <p>
            dibandingkan harus mengingat alamat IP server tersebut.
          </p>
        </InfoCard>

        <InfoCard
          title="DNS Lookup"
          icon="🌐"
        >
          <p>
            Ketika aplikasi membutuhkan alamat IP dari sebuah domain,
            sistem dapat melakukan proses DNS lookup untuk mencari
            informasi tersebut.
          </p>

          <CodeBox>
            Domain → DNS → IP Address
          </CodeBox>
        </InfoCard>
      </div>

      <!-- DNS Flow -->
      <div
        class="mt-8 rounded-3xl border border-red-500/20 bg-red-500/5 p-8"
      >
        <p class="text-sm text-red-400">
          Contoh DNS
        </p>

        <div
          class="mt-8 grid gap-4 md:grid-cols-5"
        >
          <NetworkNode
            title="Browser"
            address="example.com"
            icon="🌍"
          />

          <div class="hidden items-center justify-center text-2xl text-red-500 md:flex">
            →
          </div>

          <NetworkNode
            title="DNS"
            address="Lookup"
            icon="🔎"
          />

          <div class="hidden items-center justify-center text-2xl text-red-500 md:flex">
            →
          </div>

          <NetworkNode
            title="Server"
            address="93.184.x.x"
            icon="🖥️"
          />
        </div>

        <p class="mt-8 text-center text-sm text-zinc-500">
          DNS membantu mengubah nama domain menjadi informasi alamat yang
          dibutuhkan untuk menghubungi server.
        </p>
      </div>

      <ConceptBox title="DNS bukan Internet">
        <p class="leading-relaxed text-zinc-400">
          DNS adalah salah satu layanan/protokol penting dalam Internet.
          DNS membantu proses pencarian alamat, tetapi DNS sendiri bukan
          keseluruhan Internet.
        </p>
      </ConceptBox>
    </section>

    <!-- ====================================================== -->
    <!-- 10 PROTOKOL -->
    <!-- ====================================================== -->

    <section
      id="protokol"
      class="relative mx-auto max-w-7xl scroll-mt-20 px-6 py-20"
    >
      <SectionHeader
        number="10"
        eyebrow="Network Protocol"
        title="Protokol Jaringan"
        description="Protokol merupakan aturan dan mekanisme yang digunakan perangkat untuk berkomunikasi dan bertukar data."
      />

      <div class="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <ProtocolCard
          title="HTTP"
          icon="🌍"
          full-name="Hypertext Transfer Protocol"
          description="Protokol yang digunakan dalam komunikasi layanan web."
          example="Browser ↔ Web Server"
        />

        <ProtocolCard
          title="HTTPS"
          icon="🔐"
          full-name="HTTP Secure"
          description="HTTP yang menggunakan mekanisme keamanan/enkripsi untuk melindungi komunikasi."
          example="https://website.com"
        />

        <ProtocolCard
          title="FTP"
          icon="📁"
          full-name="File Transfer Protocol"
          description="Protokol yang digunakan untuk transfer file antara client dan server."
          example="Upload / Download"
        />

        <ProtocolCard
          title="SMTP"
          icon="✉️"
          full-name="Simple Mail Transfer Protocol"
          description="Protokol yang umum digunakan dalam pengiriman email."
          example="Mail Client → Mail Server"
        />

        <ProtocolCard
          title="ICMP"
          icon="📡"
          full-name="Internet Control Message Protocol"
          description="Digunakan untuk pesan kontrol dan diagnostik jaringan."
          example="ping"
        />

        <ProtocolCard
          title="DHCP"
          icon="⚙️"
          full-name="Dynamic Host Configuration Protocol"
          description="Memberikan konfigurasi jaringan secara otomatis."
          example="IP + Gateway + DNS"
        />
      </div>

      <!-- Protocol comparison -->
      <ConceptBox title="Ringkasan protokol">
        <div class="overflow-x-auto">
          <table class="w-full min-w-[700px] text-left">
            <thead>
              <tr class="border-b border-zinc-800">
                <th class="px-4 py-4">
                  Protocol
                </th>

                <th class="px-4 py-4">
                  Fungsi
                </th>

                <th class="px-4 py-4">
                  Contoh
                </th>
              </tr>
            </thead>

            <tbody>
              <tr
                v-for="protocol in protocolTable"
                :key="protocol.name"
                class="border-b border-zinc-900"
              >
                <td class="px-4 py-4 font-mono font-semibold text-red-400">
                  {{ protocol.name }}
                </td>

                <td class="px-4 py-4 text-zinc-400">
                  {{ protocol.function }}
                </td>

                <td class="px-4 py-4 text-zinc-500">
                  {{ protocol.example }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </ConceptBox>
    </section>

    <!-- ====================================================== -->
    <!-- 11 ICMP -->
    <!-- ====================================================== -->

    <section
      id="icmp"
      class="relative mx-auto max-w-7xl scroll-mt-20 px-6 py-20"
    >
      <SectionHeader
        number="11"
        eyebrow="Troubleshooting"
        title="ICMP, Ping & Network Testing"
        description="Beberapa protokol jaringan juga digunakan untuk membantu melakukan pemeriksaan dan troubleshooting konektivitas."
      />

      <div class="mt-12 grid gap-6 lg:grid-cols-2">
        <InfoCard
          title="ICMP"
          icon="📡"
        >
          <p>
            ICMP atau Internet Control Message Protocol digunakan untuk
            berbagai pesan kontrol dan diagnostik pada jaringan IP.
          </p>

          <p>
            Salah satu penggunaan yang paling dikenal adalah perintah
            <code class="rounded bg-zinc-950 px-2 py-1 text-red-400">
              ping
            </code>
            untuk menguji konektivitas.
          </p>
        </InfoCard>

        <InfoCard
          title="Ping"
          icon="🏓"
        >
          <p>
            Ping dapat digunakan untuk mengirim pesan ICMP Echo Request
            dan melihat apakah terdapat respons dari tujuan.
          </p>

          <CodeBox>
            ping 192.168.1.1
          </CodeBox>
        </InfoCard>
      </div>

      <!-- Troubleshooting -->
      <div
        class="mt-8 rounded-3xl border border-zinc-800 bg-zinc-900/50 p-8"
      >
        <h3 class="text-2xl font-bold">
          Urutan troubleshooting sederhana
        </h3>

        <div class="mt-8 grid gap-4 md:grid-cols-4">
          <StepCard
            number="01"
            title="Cek Interface"
            description="Pastikan perangkat memiliki koneksi jaringan."
          />

          <StepCard
            number="02"
            title="Cek IP"
            description="Pastikan IP Address sudah diperoleh."
          />

          <StepCard
            number="03"
            title="Cek Gateway"
            description="Uji koneksi menuju Default Gateway."
          />

          <StepCard
            number="04"
            title="Cek Internet"
            description="Uji koneksi menuju tujuan di luar jaringan."
          />
        </div>
      </div>
    </section>

    <!-- ====================================================== -->
    <!-- 12 PACKET -->
    <!-- ====================================================== -->

    <section
      id="packet"
      class="relative mx-auto max-w-7xl scroll-mt-20 px-6 py-20"
    >
      <SectionHeader
        number="12"
        eyebrow="Data Transmission"
        title="Paket Data"
        description="Data yang dikirim melalui jaringan diproses menggunakan berbagai unit data dan informasi kontrol agar dapat mencapai tujuan."
      />

      <div
        class="mt-12 rounded-3xl border border-zinc-800 bg-zinc-900/50 p-8 md:p-10"
      >
        <h3 class="text-2xl font-bold">
          Data dikirim melalui jaringan
        </h3>

        <p class="mt-4 max-w-3xl leading-relaxed text-zinc-500">
          Dalam pembahasan jaringan, data yang dikirim dapat dibagi dan
          dibungkus dengan informasi tambahan sesuai dengan protokol dan
          layer yang digunakan.
        </p>

        <div class="mt-10 grid gap-4 md:grid-cols-5">
          <div
            v-for="(packet, index) in packets"
            :key="packet"
            class="relative rounded-2xl border border-zinc-800 bg-zinc-950 p-6 text-center"
          >
            <div
              class="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10 font-bold text-red-400"
            >
              {{ index + 1 }}
            </div>

            <p class="mt-4 font-mono text-sm text-zinc-300">
              {{ packet }}
            </p>

            <div
              v-if="index < packets.length - 1"
              class="absolute -right-3 top-1/2 hidden text-red-500 md:block"
            >
              →
            </div>
          </div>
        </div>
      </div>

      <!-- Encapsulation -->
      <ConceptBox title="Konsep sederhana komunikasi">
        <div class="grid gap-4 md:grid-cols-4">
          <StepCard
            number="01"
            title="Source"
            description="Perangkat sumber menghasilkan atau mengirim data."
          />

          <StepCard
            number="02"
            title="Packet"
            description="Data diproses menjadi unit yang dapat dikirim melalui jaringan."
          />

          <StepCard
            number="03"
            title="Network"
            description="Perangkat jaringan meneruskan data menuju tujuan."
          />

          <StepCard
            number="04"
            title="Destination"
            description="Perangkat tujuan menerima dan memproses data."
          />
        </div>
      </ConceptBox>
    </section>

    <!-- ====================================================== -->
    <!-- COMPLETE NETWORK FLOW -->
    <!-- ====================================================== -->

    <section
      id="flow"
      class="relative mx-auto max-w-7xl scroll-mt-20 px-6 py-20"
    >
      <SectionHeader
        number="13"
        eyebrow="Everything Together"
        title="Bagaimana Semuanya Bekerja?"
        description="Sekarang gabungkan konsep-konsep sebelumnya untuk melihat contoh ketika sebuah komputer membuka sebuah website."
      />

      <div
        class="mt-12 rounded-3xl border border-zinc-800 bg-zinc-900/50 p-8 md:p-10"
      >
        <div class="space-y-4">
          <FlowRow
            number="01"
            title="Client"
            description="Komputer memiliki IP Address dan konfigurasi jaringan."
          />

          <FlowRow
            number="02"
            title="DNS"
            description="Client mencari alamat IP dari domain yang ingin diakses."
          />

          <FlowRow
            number="03"
            title="Default Gateway"
            description="Jika server berada di jaringan lain, paket diarahkan menuju gateway."
          />

          <FlowRow
            number="04"
            title="Router"
            description="Router menentukan jalur dan meneruskan paket menuju jaringan tujuan."
          />

          <FlowRow
            number="05"
            title="NAT"
            description="Pada jaringan tertentu, alamat private ditranslasikan menuju public IP."
          />

          <FlowRow
            number="06"
            title="Firewall"
            description="Traffic dapat diperiksa berdasarkan aturan keamanan."
          />

          <FlowRow
            number="07"
            title="Web Server"
            description="Server menerima request dan mengirimkan response."
          />
        </div>
      </div>

      <!-- Complete diagram -->
      <div
        class="mt-8 overflow-x-auto rounded-3xl border border-zinc-800 bg-zinc-950 p-8"
      >
        <div class="flex min-w-[900px] items-center justify-between gap-4">
          <NetworkNode
            title="Browser"
            address="Client"
            icon="💻"
          />

          <span class="text-2xl text-red-500">
            →
          </span>

          <NetworkNode
            title="DNS"
            address="Domain → IP"
            icon="🔎"
          />

          <span class="text-2xl text-red-500">
            →
          </span>

          <NetworkNode
            title="Gateway"
            address="192.168.1.1"
            icon="🚪"
          />

          <span class="text-2xl text-red-500">
            →
          </span>

          <NetworkNode
            title="NAT"
            address="Private → Public"
            icon="🔄"
          />

          <span class="text-2xl text-red-500">
            →
          </span>

          <NetworkNode
            title="Server"
            address="Web"
            icon="🖥️"
          />
        </div>
      </div>
    </section>

    <!-- ====================================================== -->
    <!-- QUICK SUMMARY -->
    <!-- ====================================================== -->

    <section
      id="summary"
      class="relative mx-auto max-w-7xl scroll-mt-20 px-6 py-20"
    >
      <div
        class="overflow-hidden rounded-3xl border border-red-500/20 bg-red-500/5 p-8 md:p-12"
      >
        <div class="max-w-3xl">
          <p class="text-sm text-red-400">
            Quick Summary
          </p>

          <h2 class="mt-3 text-4xl font-bold">
            Ingat 15 konsep utama
          </h2>

          <p class="mt-5 leading-relaxed text-zinc-400">
            Jika konsep-konsep berikut sudah dipahami, kamu akan memiliki
            dasar yang kuat untuk mengerjakan soal Network Configuration.
          </p>
        </div>

        <div class="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="item in summary"
            :key="item.number"
            class="rounded-2xl border border-zinc-800 bg-zinc-950 p-5"
          >
            <span class="text-sm text-red-400">
              {{ item.number }}
            </span>

            <h3 class="mt-2 font-bold">
              {{ item.title }}
            </h3>

            <p class="mt-2 text-sm leading-relaxed text-zinc-500">
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ====================================================== -->
    <!-- QUIZ -->
    <!-- ====================================================== -->

    <section class="relative mx-auto max-w-7xl px-6 py-20">
      <div
        class="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-8 text-center md:p-12"
      >
        <div class="text-5xl">
          🧠
        </div>

        <h2 class="mt-6 text-3xl font-bold md:text-4xl">
          Siap menguji pemahaman?
        </h2>

        <p
          class="mx-auto mt-4 max-w-2xl leading-relaxed text-zinc-500"
        >
          Setelah memahami materi ini, coba kerjakan kembali 30 soal
          Network Configuration dan lihat seberapa jauh pemahamanmu
          terhadap konsep jaringan komputer.
        </p>

        <div class="mt-8 flex flex-wrap justify-center gap-3">
          <span
            v-for="tag in quizTags"
            :key="tag"
            class="rounded-full border border-zinc-800 bg-zinc-950 px-4 py-2 text-sm text-zinc-400"
          >
            {{ tag }}
          </span>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer
      class="relative border-t border-zinc-900 px-6 py-10 text-center"
    >
      <p class="text-sm text-zinc-600">
        Network Configuration · lugasalhawariy
      </p>
    </footer>
  </main>
</template>

<script setup>
const tags = [
  "Router",
  "Switch",
  "Access Point",
  "Hub",
  "Repeater",
  "Modem",
  "IP Address",
  "IPv4",
  "Subnet Mask",
  "MAC Address",
  "ARP",
  "Gateway",
  "Routing",
  "NAT",
  "Firewall",
  "DHCP",
  "DNS",
  "HTTP",
  "HTTPS",
  "FTP",
  "SMTP",
  "ICMP",
  "Packet",
];

const sections = [
  {
    id: "dasar",
    title: "Dasar Jaringan",
    description:
      "Jaringan komputer, LAN, WAN, dan Internet.",
  },
  {
    id: "perangkat",
    title: "Perangkat Jaringan",
    description:
      "Router, Switch, Access Point, Hub, Repeater, dan Modem.",
  },
  {
    id: "ip",
    title: "IP Address",
    description:
      "IPv4, Subnet Mask, Private IP, dan Public IP.",
  },
  {
    id: "mac",
    title: "MAC & ARP",
    description:
      "MAC Address, Ethernet Frame, dan ARP.",
  },
  {
    id: "routing",
    title: "Routing & Gateway",
    description:
      "Router, routing, dan Default Gateway.",
  },
  {
    id: "nat",
    title: "NAT",
    description:
      "Translasi Private IP menuju jaringan publik.",
  },
  {
    id: "firewall",
    title: "Firewall",
    description:
      "Mengontrol traffic berdasarkan aturan.",
  },
  {
    id: "dhcp",
    title: "DHCP",
    description:
      "Konfigurasi IP secara otomatis.",
  },
  {
    id: "dns",
    title: "DNS",
    description:
      "Domain Name System dan DNS Lookup.",
  },
  {
    id: "protokol",
    title: "Protokol",
    description:
      "HTTP, HTTPS, FTP, SMTP, ICMP, dan DHCP.",
  },
  {
    id: "icmp",
    title: "ICMP & Ping",
    description:
      "Diagnostik dan troubleshooting jaringan.",
  },
  {
    id: "packet",
    title: "Paket Data",
    description:
      "Bagaimana data dikirim melalui jaringan.",
  },
  {
    id: "flow",
    title: "Network Flow",
    description:
      "Menggabungkan seluruh konsep menjadi satu alur.",
  },
];

const ipv4Parts = [
  "192",
  "168",
  "1",
  "10",
];

const privateRanges = [
  "10.0.0.0/8",
  "172.16.0.0/12",
  "192.168.0.0/16",
];

const firewallRules = [
  {
    title: "Allow",
    description:
      "Mengizinkan traffic yang sesuai dengan aturan firewall.",
  },
  {
    title: "Deny",
    description:
      "Menolak traffic yang tidak diizinkan oleh aturan.",
  },
  {
    title: "Inbound",
    description:
      "Mengatur traffic atau koneksi yang masuk.",
  },
  {
    title: "Outbound",
    description:
      "Mengatur traffic atau koneksi yang keluar.",
  },
];

const dhcpItems = [
  "IP Address",
  "Subnet Mask",
  "Default Gateway",
  "DNS Server",
];

const packets = [
  "Packet 01",
  "Packet 02",
  "Packet 03",
  "Packet 04",
  "Packet 05",
];

const protocolTable = [
  {
    name: "HTTP",
    function: "Komunikasi layanan web",
    example: "Browser ↔ Web Server",
  },
  {
    name: "HTTPS",
    function: "Komunikasi web dengan perlindungan keamanan",
    example: "Secure Web",
  },
  {
    name: "FTP",
    function: "Transfer file",
    example: "Upload / Download",
  },
  {
    name: "SMTP",
    function: "Pengiriman email",
    example: "Mail Server",
  },
  {
    name: "ICMP",
    function: "Pesan kontrol dan diagnostik",
    example: "ping",
  },
  {
    name: "DHCP",
    function: "Konfigurasi jaringan otomatis",
    example: "IP / Gateway / DNS",
  },
  {
    name: "DNS",
    function: "Resolusi nama domain",
    example: "domain → IP",
  },
];

const summary = [
  {
    number: "01",
    title: "Router",
    description:
      "Menghubungkan jaringan yang berbeda.",
  },
  {
    number: "02",
    title: "Switch",
    description:
      "Menghubungkan perangkat dalam LAN.",
  },
  {
    number: "03",
    title: "IP Address",
    description:
      "Alamat logis perangkat/interface jaringan.",
  },
  {
    number: "04",
    title: "Subnet Mask",
    description:
      "Menentukan bagian network dan host.",
  },
  {
    number: "05",
    title: "MAC Address",
    description:
      "Alamat interface pada jaringan link.",
  },
  {
    number: "06",
    title: "ARP",
    description:
      "Mencari MAC berdasarkan IP pada LAN.",
  },
  {
    number: "07",
    title: "Gateway",
    description:
      "Jalur menuju jaringan lain.",
  },
  {
    number: "08",
    title: "Routing",
    description:
      "Menentukan dan meneruskan jalur paket.",
  },
  {
    number: "09",
    title: "NAT",
    description:
      "Melakukan translasi alamat jaringan.",
  },
  {
    number: "10",
    title: "Firewall",
    description:
      "Mengontrol traffic berdasarkan aturan.",
  },
  {
    number: "11",
    title: "DHCP",
    description:
      "Memberikan konfigurasi jaringan otomatis.",
  },
  {
    number: "12",
    title: "DNS",
    description:
      "Melakukan resolusi domain menjadi IP.",
  },
  {
    number: "13",
    title: "HTTP / HTTPS",
    description:
      "Komunikasi layanan web.",
  },
  {
    number: "14",
    title: "FTP / SMTP",
    description:
      "Transfer file dan pengiriman email.",
  },
  {
    number: "15",
    title: "ICMP / Ping",
    description:
      "Diagnostik dan pengujian konektivitas.",
  },
];

const quizTags = [
  "30 Soal",
  "Router",
  "Switch",
  "IP Address",
  "NAT",
  "Firewall",
  "DNS",
  "DHCP",
  "ARP",
  "ICMP",
  "Protocol",
];
</script>

<script>
export default {
  components: {
    SectionHeader: {
      props: {
        number: String,
        eyebrow: String,
        title: String,
        description: String,
      },

      template: `
        <div class="max-w-3xl">
          <div class="flex items-center gap-3">
            <span class="font-mono text-sm text-red-400">
              {{ number }}
            </span>

            <span class="h-px w-10 bg-red-500/40"></span>

            <span class="text-sm uppercase tracking-[0.2em] text-zinc-500">
              {{ eyebrow }}
            </span>
          </div>

          <h2 class="mt-5 text-4xl font-black leading-tight md:text-5xl">
            {{ title }}
          </h2>

          <p class="mt-5 text-lg leading-relaxed text-zinc-500">
            {{ description }}
          </p>
        </div>
      `,
    },

    InfoCard: {
      props: {
        title: String,
        icon: String,
      },

      template: `
        <article
          class="rounded-3xl border border-zinc-800 bg-zinc-900/50 p-7 transition hover:-translate-y-1 hover:border-red-500/30"
        >
          <div class="flex items-center gap-4">
            <div
              class="flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10 text-2xl"
            >
              {{ icon }}
            </div>

            <h3 class="text-xl font-bold">
              {{ title }}
            </h3>
          </div>

          <div class="mt-6 space-y-4 text-sm leading-relaxed text-zinc-400">
            <slot />
          </div>
        </article>
      `,
    },

    ConceptBox: {
      props: {
        title: String,
      },

      template: `
        <div
          class="mt-8 rounded-3xl border border-zinc-800 bg-zinc-900/40 p-7"
        >
          <h3 class="text-xl font-bold">
            {{ title }}
          </h3>

          <div class="mt-5">
            <slot />
          </div>
        </div>
      `,
    },

    DeviceCard: {
      props: {
        title: String,
        icon: String,
        description: String,
        points: String,
      },

      computed: {
        pointList() {
          return this.points.split(";")
        },
      },

      template: `
        <article
          class="group rounded-3xl border border-zinc-800 bg-zinc-900/50 p-7 transition hover:-translate-y-1 hover:border-red-500/30"
        >
          <div class="flex items-center justify-between">
            <div
              class="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-500/10 text-3xl"
            >
              {{ icon }}
            </div>

            <span
              class="text-xs uppercase tracking-widest text-zinc-600"
            >
              Network Device
            </span>
          </div>

          <h3
            class="mt-6 text-2xl font-bold transition group-hover:text-red-400"
          >
            {{ title }}
          </h3>

          <p class="mt-3 text-sm leading-relaxed text-zinc-500">
            {{ description }}
          </p>

          <div class="mt-6 space-y-2">
            <div
              v-for="point in pointList"
              :key="point"
              class="flex items-center gap-2 text-sm text-zinc-400"
            >
              <span class="text-red-400">
                ✓
              </span>

              {{ point }}
            </div>
          </div>
        </article>
      `,
    },

    NetworkNode: {
      props: {
        title: String,
        address: String,
        icon: String,
      },

      template: `
        <div
          class="rounded-2xl border border-zinc-800 bg-zinc-950 p-5 text-center"
        >
          <div class="text-4xl">
            {{ icon }}
          </div>

          <h4 class="mt-3 font-bold">
            {{ title }}
          </h4>

          <p class="mt-2 font-mono text-xs text-red-400">
            {{ address }}
          </p>
        </div>
      `,
    },

    ProtocolCard: {
      props: {
        title: String,
        icon: String,
        fullName: String,
        description: String,
        example: String,
      },

      template: `
        <article
          class="rounded-3xl border border-zinc-800 bg-zinc-900/50 p-7 transition hover:-translate-y-1 hover:border-red-500/30"
        >
          <div class="flex items-center justify-between">
            <div
              class="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-500/10 text-3xl"
            >
              {{ icon }}
            </div>

            <span class="font-mono text-red-400">
              {{ title }}
            </span>
          </div>

          <h3 class="mt-6 text-xl font-bold">
            {{ fullName }}
          </h3>

          <p class="mt-3 text-sm leading-relaxed text-zinc-500">
            {{ description }}
          </p>

          <div
            class="mt-6 rounded-xl border border-zinc-800 bg-zinc-950 p-4"
          >
            <p class="text-xs text-zinc-600">
              Contoh
            </p>

            <p class="mt-2 font-mono text-sm text-zinc-300">
              {{ example }}
            </p>
          </div>
        </article>
      `,
    },

    StatCard: {
      props: {
        value: String,
        title: String,
        description: String,
      },

      template: `
        <div
          class="rounded-3xl border border-zinc-800 bg-zinc-900/50 p-6"
        >
          <p class="font-mono text-2xl font-bold text-red-400">
            {{ value }}
          </p>

          <h3 class="mt-3 font-bold">
            {{ title }}
          </h3>

          <p class="mt-2 text-sm leading-relaxed text-zinc-500">
            {{ description }}
          </p>
        </div>
      `,
    },

    CodeBox: {
      template: `
        <div
          class="rounded-xl border border-zinc-800 bg-zinc-950 p-5 font-mono text-sm leading-7 text-red-400"
        >
          <slot />
        </div>
      `,
    },

    BulletItem: {
      props: {
        text: String,
      },

      template: `
        <div
          class="rounded-2xl border border-zinc-800 bg-zinc-950 p-5"
        >
          <div class="flex gap-3">
            <span class="text-red-400">
              →
            </span>

            <p class="text-sm leading-relaxed text-zinc-400">
              {{ text }}
            </p>
          </div>
        </div>
      `,
    },

    StepCard: {
      props: {
        number: String,
        title: String,
        description: String,
      },

      template: `
        <div
          class="rounded-2xl border border-zinc-800 bg-zinc-950 p-6"
        >
          <span class="font-mono text-sm text-red-400">
            {{ number }}
          </span>

          <h3 class="mt-3 font-bold">
            {{ title }}
          </h3>

          <p class="mt-2 text-sm leading-relaxed text-zinc-500">
            {{ description }}
          </p>
        </div>
      `,
    },

    FlowRow: {
      props: {
        number: String,
        title: String,
        description: String,
      },

      template: `
        <div
          class="flex gap-5 rounded-2xl border border-zinc-800 bg-zinc-950 p-5"
        >
          <div
            class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-500/10 font-mono text-sm text-red-400"
          >
            {{ number }}
          </div>

          <div>
            <h3 class="font-bold">
              {{ title }}
            </h3>

            <p class="mt-2 text-sm leading-relaxed text-zinc-500">
              {{ description }}
            </p>
          </div>
        </div>
      `,
    },
  },
};
</script>

<style>
html {
  scroll-behavior: smooth;
}

.grid-pattern {
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  background-size: 40px 40px;
}

code {
  font-family: monospace;
}
</style>