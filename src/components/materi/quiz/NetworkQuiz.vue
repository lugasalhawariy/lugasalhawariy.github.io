<script setup>
import { computed, onMounted, ref } from "vue";

// Format: [pertanyaan, jawaban benar, salah 1, salah 2, salah 3, salah 4]
const rawQuestions = [
  ["Perangkat yang berfungsi menghubungkan jaringan lokal dengan jaringan lain atau Internet adalah...", "Router", "Switch", "Hub", "Repeater", "Modem"],
  ["Internet merupakan jaringan yang menghubungkan...", "Berbagai jaringan komputer di seluruh dunia", "Satu komputer saja", "Komputer dalam satu ruangan saja", "Printer dengan komputer", "Keyboard dengan CPU"],
  ["Perangkat yang meneruskan paket data berdasarkan alamat IP adalah...", "Router", "Switch", "Access Point", "Repeater", "Hub"],
  ["Fungsi utama router dalam jaringan adalah...", "Menghubungkan dan meneruskan data antarjaringan", "Menyimpan file", "Menampilkan gambar", "Mencetak dokumen", "Mengedit video"],
  ["IP Address digunakan untuk...", "Memberikan identitas pada perangkat dalam jaringan", "Mengatur ukuran monitor", "Menambah kapasitas RAM", "Mengatur warna kabel", "Menghapus virus"],
  ["Contoh alamat IPv4 yang benar adalah...", "192.168.1.10", "192.168.1.999", "300.10.1.1", "192.168.1", "192.168.1.1.5"],
  ["IP 192.168.1.1 termasuk dalam kategori...", "IP private", "IP publik", "IP multicast", "IP broadcast Internet", "IP DNS"],
  ["NAT pada router digunakan untuk...", "Mengubah alamat IP private agar perangkat dapat mengakses Internet menggunakan IP publik", "Memperbesar RAM", "Mengganti kabel jaringan", "Menghapus sistem operasi", "Mempercepat prosesor"],
  ["Salah satu manfaat NAT adalah...", "Menghemat penggunaan alamat IPv4 publik", "Menghilangkan kebutuhan router", "Membuat komputer tanpa IP", "Menghapus firewall", "Mengganti MAC Address secara permanen"],
  ["Firewall berfungsi untuk...", "Mengontrol lalu lintas jaringan berdasarkan aturan tertentu", "Memperbesar kapasitas hard disk", "Mengubah monitor menjadi touchscreen", "Mengatur resolusi layar", "Mengisi daya komputer"],
  ["Firewall dapat digunakan untuk mencegah...", "Akses jaringan yang tidak diizinkan", "Komputer menyala", "Penggunaan keyboard", "Penyimpanan file", "Penggunaan printer"],
  ["Perangkat jaringan yang menghubungkan beberapa perangkat dalam satu jaringan LAN adalah...", "Switch", "Router", "Modem", "Firewall", "Server DNS"],
  ["Switch meneruskan frame berdasarkan...", "MAC Address", "IP Address publik saja", "Nama pengguna", "Password Wi-Fi", "Nomor telepon"],
  ["Perangkat yang biasanya menjadi penghubung dari jaringan lokal menuju Internet disebut...", "Router/Gateway", "Keyboard", "Monitor", "Printer", "Scanner"],
  ["Protokol yang digunakan untuk menerjemahkan nama domain menjadi alamat IP adalah...", "DNS", "HTTP", "FTP", "SMTP", "DHCP"],
  ["Protokol yang digunakan untuk mengirim halaman web adalah...", "HTTP", "FTP", "SMTP", "DHCP", "ARP"],
  ["HTTPS merupakan HTTP yang menggunakan...", "Enkripsi untuk mengamankan komunikasi", "Kabel yang lebih panjang", "IP private", "Switch tambahan", "DNS khusus"],
  ["Protokol yang digunakan untuk memperoleh alamat IP secara otomatis adalah...", "DHCP", "DNS", "HTTP", "FTP", "SSH"],
  ["DHCP biasanya memberikan informasi berikut kepada client, yaitu...", "IP Address, Subnet Mask, Gateway, dan DNS Server", "Kapasitas RAM", "Jenis monitor", "Kecepatan CPU", "Ukuran hard disk"],
  ["Protokol yang digunakan untuk transfer file adalah...", "FTP", "DNS", "DHCP", "ARP", "ICMP"],
  ["Protokol yang umum digunakan untuk mengirim email adalah...", "SMTP", "FTP", "DNS", "DHCP", "ARP"],
  ["Perintah ping umumnya menggunakan protokol...", "ICMP", "HTTP", "FTP", "SMTP", "DHCP"],
  ["Fungsi DNS dalam jaringan adalah...", "Mengubah nama domain menjadi alamat IP", "Menghubungkan kabel LAN", "Membuat alamat MAC", "Memblokir semua Internet", "Mengatur kecepatan prosesor"],
  ["Default Gateway digunakan untuk...", "Mengirim paket menuju jaringan lain", "Menentukan ukuran monitor", "Menyimpan password", "Mengatur resolusi gambar", "Mengganti MAC Address"],
  ["Jika komputer memiliki IP 192.168.1.10 dan router 192.168.1.1, maka 192.168.1.1 biasanya berfungsi sebagai...", "Default Gateway", "DNS", "MAC Address", "Hostname", "Subnet"],
  ["Alamat MAC digunakan untuk mengidentifikasi...", "Interface/perangkat jaringan", "Website", "Akun email", "Sistem operasi", "File komputer"],
  ["Protokol ARP digunakan untuk...", "Mengetahui MAC Address berdasarkan IP Address dalam jaringan lokal", "Mengirim email", "Membuka website", "Memberikan IP otomatis", "Mengirim file melalui FTP"],
  ["Data yang dikirim melalui jaringan umumnya dibagi menjadi bagian-bagian yang disebut...", "Paket", "Folder", "Program", "Driver", "Pixel"],
  ["Ketika komputer mengakses sebuah website menggunakan nama domain, komputer biasanya terlebih dahulu melakukan...", "Pencarian alamat IP melalui DNS", "Penghapusan router", "Penghapusan IP oleh switch", "Penghapusan browser oleh firewall", "Penggantian monitor"],
  ["Tujuan utama protokol jaringan adalah...", "Menentukan aturan komunikasi antarperangkat dalam jaringan", "Memperbesar kapasitas hard disk", "Mengatur warna kabel", "Mengontrol brightness monitor", "Menambah jumlah RAM"],
];

// Poin tiap soal, sesuai urutan rawQuestions (soal 1-6 = 4 poin, sisanya 3 poin)
const points = [4, 4, 4, 4, 4, 4, ...Array(24).fill(3)];
const maxPoints = points.reduce((a, b) => a + b, 0);

const letters = ["A", "B", "C", "D", "E"];

const questions = ref([]);
const answers = ref([]);
const current = ref(0);
const finished = ref(false);

function shuffle(list) {
  const arr = [...list];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function build() {
  const order = shuffle(rawQuestions.map((_, i) => i));

  questions.value = order.map((i) => {
    const [question, correct, ...wrong] = rawQuestions[i];
    return {
      question,
      points: points[i],
      options: shuffle([
        { text: correct, correct: true },
        ...wrong.map((text) => ({ text, correct: false })),
      ]),
    };
  });

  answers.value = Array(rawQuestions.length).fill(null);
  current.value = 0;
  finished.value = false;
}

onMounted(build);

const total = computed(() => questions.value.length);
const question = computed(() => questions.value[current.value]);
const selected = computed(() => answers.value[current.value]);
const answeredCount = computed(
  () => answers.value.filter((a) => a !== null).length
);

// jumlah jawaban benar
const score = computed(
  () =>
    questions.value.filter(
      (q, i) => answers.value[i] !== null && q.options[answers.value[i]].correct
    ).length
);

// poin yang didapat
const earnedPoints = computed(() =>
  questions.value.reduce(
    (sum, q, i) =>
      answers.value[i] !== null && q.options[answers.value[i]].correct
        ? sum + q.points
        : sum,
    0
  )
);

// nilai akhir 0-100
const percent = computed(() =>
  Math.round((earnedPoints.value / maxPoints) * 100)
);

const wrongList = computed(() =>
  questions.value
    .map((q, i) => ({ q, i, picked: answers.value[i] }))
    .filter(({ q, picked }) => picked === null || !q.options[picked].correct)
);

const resultMessage = computed(() => {
  if (percent.value >= 90) return "Luar biasa! Konsepnya sudah sangat kuat.";
  if (percent.value >= 75) return "Bagus! Tinggal rapikan beberapa konsep.";
  if (percent.value >= 50) return "Lumayan. Pelajari lagi materi yang masih salah.";
  return "Ayo ulangi materinya, lalu coba lagi.";
});

function choose(index) {
  if (selected.value !== null) return;
  answers.value[current.value] = index;
}

function go(index) {
  if (index >= 0 && index < total.value) current.value = index;
}

function optionClass(option, index) {
  if (selected.value === null) {
    return "border-zinc-800 bg-zinc-950 text-zinc-300 hover:border-red-500/50 hover:bg-zinc-900";
  }
  if (option.correct) {
    return "border-emerald-500/60 bg-emerald-500/10 text-emerald-300";
  }
  if (index === selected.value) {
    return "border-red-500/60 bg-red-500/10 text-red-300";
  }
  return "border-zinc-900 bg-zinc-950 text-zinc-600";
}

function dotClass(i) {
  if (i === current.value) return "border-red-500 bg-red-500/20 text-white";
  const a = answers.value[i];
  if (a === null) return "border-zinc-800 bg-zinc-950 text-zinc-500";
  return questions.value[i].options[a].correct
    ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-300"
    : "border-red-500/40 bg-red-500/10 text-red-300";
}
</script>

<template>
  <section id="quiz" class="relative mx-auto max-w-4xl scroll-mt-20 px-6 py-20">
    <div v-if="questions.length" class="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-6 md:p-10">
      <!-- Header -->
      <div class="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p class="text-sm font-medium text-red-400">Latihan Soal</p>
          <h2 class="mt-1 text-3xl font-bold">Network Configuration</h2>
        </div>

        <div class="text-right text-sm text-zinc-500">
          <p>Terjawab {{ answeredCount }}/{{ total }}</p>
          <p class="font-mono text-red-400">Nilai {{ percent }}</p>
        </div>
      </div>

      <!-- Progress -->
      <div class="mt-6 h-2 overflow-hidden rounded-full bg-zinc-800">
        <div
          class="h-full rounded-full bg-gradient-to-r from-red-400 to-red-600 transition-all"
          :style="{ width: (answeredCount / total) * 100 + '%' }"
        />
      </div>

      <!-- ============ RESULT ============ -->
      <div v-if="finished" class="mt-10">
        <div class="rounded-2xl border border-red-500/20 bg-red-500/5 p-8 text-center">
          <p class="text-sm text-zinc-500">Hasil akhir</p>
          <p class="mt-2 text-6xl font-black text-red-400">{{ percent }}</p>
          <p class="mt-3 font-mono text-zinc-400">
            {{ score }} benar dari {{ total }} soal
          </p>
          <p class="mt-1 font-mono text-sm text-zinc-500">
            {{ earnedPoints }} / {{ maxPoints }} poin
          </p>
          <p class="mt-4 text-zinc-400">{{ resultMessage }}</p>

          <button
            class="mt-8 rounded-xl bg-red-500 px-6 py-3 font-semibold text-white transition hover:bg-red-600"
            @click="build"
          >
            Ulangi Kuis
          </button>
        </div>

        <div v-if="wrongList.length" class="mt-8">
          <h3 class="text-xl font-bold">Pembahasan jawaban yang belum tepat</h3>

          <div class="mt-5 space-y-4">
            <div
              v-for="item in wrongList"
              :key="item.i"
              class="rounded-2xl border border-zinc-800 bg-zinc-950 p-5"
            >
              <p class="text-xs text-zinc-600">Soal {{ item.i + 1 }}</p>
              <p class="mt-2 leading-relaxed">{{ item.q.question }}</p>

              <p
                v-if="item.picked !== null"
                class="mt-3 text-sm text-red-300"
              >
                Jawabanmu: {{ item.q.options[item.picked].text }}
              </p>
              <p v-else class="mt-3 text-sm text-zinc-500">Belum dijawab</p>

              <p class="mt-1 text-sm text-emerald-300">
                Jawaban benar: {{ item.q.options.find((o) => o.correct).text }}
              </p>
            </div>
          </div>
        </div>

        <p v-else class="mt-8 text-center text-emerald-300">
          Semua jawaban benar! 🎉
        </p>
      </div>

      <!-- ============ QUESTION ============ -->
      <div v-else class="mt-10">
        <p class="font-mono text-sm text-red-400">
          Soal {{ current + 1 }} / {{ total }}
        </p>

        <h3 class="mt-3 text-xl font-bold leading-relaxed md:text-2xl">
          {{ question.question }}
        </h3>

        <div class="mt-8 space-y-3">
          <button
            v-for="(option, index) in question.options"
            :key="option.text"
            :disabled="selected !== null"
            class="flex w-full items-start gap-4 rounded-2xl border p-4 text-left transition disabled:cursor-default"
            :class="optionClass(option, index)"
            @click="choose(index)"
          >
            <span
              class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-zinc-900 font-mono text-sm"
            >
              {{ letters[index] }}
            </span>

            <span class="pt-1 text-sm leading-relaxed md:text-base">
              {{ option.text }}
            </span>
          </button>
        </div>

        <p
          v-if="selected !== null"
          class="mt-5 text-sm"
          :class="question.options[selected].correct ? 'text-emerald-300' : 'text-red-300'"
        >
          {{
            question.options[selected].correct
              ? "✓ Jawaban kamu benar."
              : "✗ Jawaban kamu kurang tepat. Jawaban yang benar ditandai hijau."
          }}
        </p>

        <!-- Navigation -->
        <div class="mt-8 flex items-center justify-between gap-3">
          <button
            class="rounded-xl border border-zinc-800 px-5 py-2.5 text-sm text-zinc-300 transition hover:border-zinc-600 disabled:opacity-30"
            :disabled="current === 0"
            @click="go(current - 1)"
          >
            ← Sebelumnya
          </button>

          <button
            v-if="answeredCount === total"
            class="rounded-xl bg-red-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-red-600"
            @click="finished = true"
          >
            Lihat Hasil
          </button>

          <button
            v-else
            class="rounded-xl border border-zinc-800 px-5 py-2.5 text-sm text-zinc-300 transition hover:border-zinc-600 disabled:opacity-30"
            :disabled="current === total - 1"
            @click="go(current + 1)"
          >
            Berikutnya →
          </button>
        </div>

        <!-- Question grid -->
        <div class="mt-10 border-t border-zinc-800 pt-6">
          <p class="mb-3 text-xs uppercase tracking-widest text-zinc-600">
            Navigasi soal
          </p>

          <div class="grid grid-cols-6 gap-2 sm:grid-cols-10">
            <button
              v-for="(q, i) in questions"
              :key="i"
              class="h-9 rounded-lg border font-mono text-xs transition"
              :class="dotClass(i)"
              @click="go(i)"
            >
              {{ i + 1 }}
            </button>
          </div>

          <button
            v-if="answeredCount > 0 && answeredCount < total"
            class="mt-5 text-sm text-zinc-500 underline-offset-4 hover:text-red-400 hover:underline"
            @click="finished = true"
          >
            Akhiri kuis sekarang
          </button>
        </div>
      </div>
    </div>
  </section>
</template>