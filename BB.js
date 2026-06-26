<script>
  const modal = document.getElementById("billboard-modal");
  const closeBtn = document.querySelector(".close-btn");
  const noShowBtn = document.getElementById("no-show-today-btn");

  // ฟังก์ชันเช็คว่าต้องแสดงไหม
  function checkBillboard() {
    const lastClosed = localStorage.getItem('billboardClosedTime');
    if (lastClosed) {
      const now = new Date().getTime();
      const oneDay = 24 * 60 * 60 * 1000; // 24 ชั่วโมง
      
      // ถ้าเวลาปัจจุบันยังไม่เกิน 24 ชั่วโมงจากที่กดปุ่มไว้ ให้ซ่อนไว้
      if (now - lastClosed < oneDay) {
        modal.style.display = "none";
        return;
      }
    }
    modal.style.display = "flex"; // ถ้าเกินแล้ว หรือยังไม่เคยปิด ให้แสดง
  }

  // ปิดแบบปกติ (กากบาท) - ปิดเฉยๆ ไม่บันทึกวัน
  closeBtn.onclick = function() {
    modal.style.display = "none";
  };

  // ปิดแบบ "ไม่ต้องแสดงอีกในวันนี้"
  noShowBtn.onclick = function() {
    modal.style.display = "none";
    localStorage.setItem('billboardClosedTime', new Date().getTime());
  };

  window.onload = checkBillboard;
</script>